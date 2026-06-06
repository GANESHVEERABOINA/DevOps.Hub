// backend/src/services/searchService.ts
/**
 * Search Service – delegates to search repository.
 */
import { searchRepository } from '../repositories/searchRepository';

export const searchService = {
  search: async (query: any) => {
    if (!query.q) return [];
    return searchRepository.globalSearch(query.q);
  },
};