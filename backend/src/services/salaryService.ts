// backend/src/services/salaryService.ts
/**
 * Salary Service – provides salary insights.
 */
import { salaryRepository } from '../repositories/salaryRepository';

export const salaryService = {
  getAll: async (filters: any) => {
    return salaryRepository.findAll(filters);
  },

  getTrends: async () => {
    return salaryRepository.getTrends();
  },
};