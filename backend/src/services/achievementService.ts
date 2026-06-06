// backend/src/services/achievementService.ts
/**
 * Achievement Service – lists and tracks achievements.
 */
import { achievementRepository } from '../repositories/achievementRepository';

export const achievementService = {
  getAll: async () => {
    return achievementRepository.findAll();
  },

  getUserAchievements: async (userId: string) => {
    return achievementRepository.findUserAchievements(userId);
  },
};