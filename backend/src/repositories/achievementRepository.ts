// backend/src/repositories/achievementRepository.ts
/**
 * Achievement Repository – defines achievements and user unlocks.
 */
import { AppDataSource } from '../config/database';
import { Achievement } from '../entities/Achievement';
import { UserAchievement } from '../entities/UserAchievement';

export const achievementRepository = {
  findAll: async () => {
    return AppDataSource.getRepository(Achievement).find();
  },

  findUserAchievements: async (userId: string) => {
    return AppDataSource.getRepository(UserAchievement).find({
      where: { user: { id: userId } },
      relations: ['achievement'],
    });
  },

  unlock: async (userId: string, achievementId: number) => {
    // Check if already unlocked
    const existing = await AppDataSource.getRepository(UserAchievement).findOne({
      where: { user: { id: userId }, achievement: { id: achievementId } },
    });
    if (existing) return existing;

    return AppDataSource.getRepository(UserAchievement).save({
      user: { id: userId } as any,
      achievement: { id: achievementId } as any,
    });
  },
};