// backend/src/repositories/salaryRepository.ts
/**
 * Salary Repository – retrieves salary data with optional filters.
 */
import { AppDataSource } from '../config/database';
import { Salary } from '../entities/Salary';

export const salaryRepository = {
  findAll: async (filters?: { role?: string; experience_level?: string; location?: string; year?: number }) => {
    const repo = AppDataSource.getRepository(Salary);
    const qb = repo.createQueryBuilder('s');
    if (filters?.role) qb.andWhere('s.role = :role', { role: filters.role });
    if (filters?.experience_level) qb.andWhere('s.experience_level = :level', { level: filters.experience_level });
    if (filters?.location) qb.andWhere('s.location ILIKE :loc', { loc: `%${filters.location}%` });
    if (filters?.year) qb.andWhere('s.year = :year', { year: filters.year });
    return qb.orderBy('s.year', 'DESC').addOrderBy('s.average_salary', 'DESC').getMany();
  },

  getTrends: async () => {
    return AppDataSource.getRepository(Salary)
      .createQueryBuilder('s')
      .select('s.role, s.experience_level, s.year, AVG(s.average_salary) as avg')
      .groupBy('s.role, s.experience_level, s.year')
      .orderBy('s.year', 'ASC')
      .getRawMany();
  },
};