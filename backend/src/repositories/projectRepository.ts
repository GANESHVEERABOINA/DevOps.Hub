// backend/src/repositories/projectRepository.ts
/**
 * Project Repository – data access for hands‑on projects.
 */
import { AppDataSource } from '../config/database';
import { Project } from '../entities/Project';

export const projectRepository = {
  findAll: async (filters?: { category?: string }) => {
    const repo = AppDataSource.getRepository(Project);
    const qb = repo.createQueryBuilder('p');
    if (filters?.category) {
      qb.where('p.category = :cat', { cat: filters.category });
    }
    return qb.orderBy('p.created_at', 'DESC').getMany();
  },

  findBySlug: async (slug: string) => {
    return AppDataSource.getRepository(Project).findOne({ where: { slug } });
  },

  findById: async (id: string) => {
    return AppDataSource.getRepository(Project).findOne({ where: { id } });
  },
};