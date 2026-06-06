import { questionRepository } from '../repositories/questionRepository';
import { AppError } from '../utils/errors';

export const questionService = {
  getAllQuestions: async (filters: { category?: string; difficulty?: string; search?: string }) => {
    return questionRepository.findAll(filters);
  },

  getQuestionById: async (id: string) => {
    const question = await questionRepository.findById(id);
    if (!question) throw new AppError('Question not found', 404);
    return question;
  },

  createQuestion: async (data: any) => {
    return questionRepository.create(data);
  },

  updateQuestion: async (id: string, data: any) => {
    return questionRepository.update(id, data);
  },

  deleteQuestion: async (id: string) => {
    return questionRepository.delete(id);
  },

  getCompanyQuestions: async (companyId: number) => {
    return questionRepository.findByCompany(companyId);
  },
};