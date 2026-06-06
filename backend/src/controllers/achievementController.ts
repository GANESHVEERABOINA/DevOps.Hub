// backend/src/controllers/achievementController.ts
import { Request, Response, NextFunction } from 'express';
import { achievementService } from '../services/achievementService';
import { AuthRequest } from '../middlewares/authMiddleware';

export const achievementController = {
  /**
   * @swagger
   * /achievements:
   *   get:
   *     summary: Get all achievements
   *     tags: [Achievements]
   */
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const achievements = await achievementService.getAll();
      res.json(achievements);
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /achievements/user:
   *   get:
   *     summary: Get achievements unlocked by current user
   *     tags: [Achievements]
   *     security: [{ bearerAuth: [] }]
   */
  getUserAchievements: async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const userAchievements = await achievementService.getUserAchievements(req.user!.id);
      res.json(userAchievements);
    } catch (err) {
      next(err);
    }
  },
};