// backend/src/repositories/progressRepository.ts
/**
 * User Progress Repository – tracks user progress on resources.
 */
import { AppDataSource } from '../config/database';
import { UserProgress } from '../entities/UserProgress';

export const progressRepository = {
  findByUser: async (userId: string) => {
    return AppDataSource.getRepository(UserProgress).find({
      where: { user: { id: userId } },
    });
  },

  upsert: async (data: {
    user: any;
    resource_type: string;
    resource_id: number;
    status?: string;
    percent_complete?: number;
  }) => {
    const repo = AppDataSource.getRepository(UserProgress);
    const existing = await repo.findOne({
      where: {
        user: { id: data.user.id },
        resource_type: data.resource_type,
        resource_id: data.resource_id,
      },
    });
    if (existing) {
      existing.status = data.status || existing.status;
      existing.percent_complete = data.percent_complete ?? existing.percent_complete;
      if (data.status === 'completed' && !existing.completed_at) {
        existing.completed_at = new Date();
      }
      return repo.save(existing);
    }
    return repo.save(data);
  },

  getSummary: async (userId: string) => {
    const repo = AppDataSource.getRepository(UserProgress);
    const stats = await repo
      .createQueryBuilder('p')
      .select('p.resource_type', 'type')
      .addSelect('COUNT(p.id)', 'total')
      .addSelect('COUNT(CASE WHEN p.status = \'completed\' THEN 1 END)', 'completed')
      .where('p.user.id = :userId', { userId })
      .groupBy('p.resource_type')
      .getRawMany();
    return stats;
  },
};