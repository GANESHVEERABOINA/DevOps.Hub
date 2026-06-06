// backend/src/services/companyService.ts
/**
 * Company Service – retrieves companies.
 */
import { companyRepository } from '../repositories/companyRepository';

export const companyService = {
  getAll: async () => {
    return companyRepository.findAll();
  },
};