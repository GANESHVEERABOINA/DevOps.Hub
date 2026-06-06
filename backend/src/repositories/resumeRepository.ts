// backend/src/repositories/resumeRepository.ts
/**
 * Resume Repository – CRUD for user resumes.
 */
import { AppDataSource } from '../config/database';
import { Resume } from '../entities/Resume';

export const resumeRepository = {
  create: async (data: Partial<Resume>) => {
    return AppDataSource.getRepository(Resume).save(data);
  },

  findById: async (id: string) => {
    return AppDataSource.getRepository(Resume).findOne({ where: { id } });
  },

  findByUser: async (userId: string) => {
    return AppDataSource.getRepository(Resume).find({
      where: { user: { id: userId } },
      order: { updated_at: 'DESC' },
    });
  },

  update: async (id: string, data: Partial<Resume>) => {
    await AppDataSource.getRepository(Resume).update(id, data);
    return resumeRepository.findById(id);
  },

  delete: async (id: string) => {
    return AppDataSource.getRepository(Resume).delete(id);
  },
};