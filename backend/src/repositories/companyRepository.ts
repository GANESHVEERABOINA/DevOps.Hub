// backend/src/repositories/companyRepository.ts
/**
 * Company Repository – retrieves companies and their linked questions.
 */
import { AppDataSource } from '../config/database';
import { Company } from '../entities/Company';
import { CompanyQuestion } from '../entities/CompanyQuestion';

export const companyRepository = {
  findAll: async () => {
    return AppDataSource.getRepository(Company).find({ order: { name: 'ASC' } });
  },

  findById: async (id: number) => {
    return AppDataSource.getRepository(Company).findOne({ where: { id } });
  },

  findQuestionsByCompany: async (companyId: number) => {
    return AppDataSource.getRepository(CompanyQuestion)
      .createQueryBuilder('cq')
      .leftJoinAndSelect('cq.question', 'q')
      .leftJoinAndSelect('q.category', 'c')
      .where('cq.company_id = :companyId', { companyId })
      .getMany();
  },
};