import { AppDataSource } from '../config/database';
import { Question } from '../entities/Question';
import { ILike } from 'typeorm';

export const questionRepository = {
  findAll: async (filters: any) => {
    const repo = AppDataSource.getRepository(Question);
    const query = repo.createQueryBuilder('q').leftJoinAndSelect('q.category', 'category');
    if (filters.category) {
      query.andWhere('category.slug = :cat', { cat: filters.category });
    }
    if (filters.difficulty) {
      query.andWhere('q.difficulty = :diff', { diff: filters.difficulty });
    }
    if (filters.search) {
      query.andWhere(`to_tsvector('english', q.question_text || ' ' || coalesce(q.interview_answer, '')) @@ plainto_tsquery(:search)`, { search: filters.search });
    }
    return query.getMany();
  },
  findById: async (id: string) => {
    return AppDataSource.getRepository(Question).findOne({ where: { id }, relations: ['category'] });
  },
  findByCompany: async (companyId: number) => {
    return AppDataSource.getRepository(Question)
      .createQueryBuilder('q')
      .innerJoin('company_questions', 'cq', 'cq.question_id = q.id')
      .where('cq.company_id = :companyId', { companyId })
      .getMany();
  },
  create: (data: Partial<Question>) => AppDataSource.getRepository(Question).save(data),
  update: async (id: string, data: Partial<Question>) => {
    await AppDataSource.getRepository(Question).update(id, data);
    return questionRepository.findById(id);
  },
  delete: (id: string) => AppDataSource.getRepository(Question).delete(id),
};