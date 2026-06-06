// backend/src/controllers/progressController.ts
import { Request, Response, NextFunction } from 'express';
import { progressService } from '../services/progressService';
import { AuthRequest } from '../middlewares/authMiddleware';

export const progressController = {
  /**
   * @swagger
   * /progress/summary:
   *   get:
   *     summary: Get overall progress summary for current user
   *     tags: [Progress]
   *     security: [{ bearerAuth: [] }]
   */
  getSummary: async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const summary = await progressService.getSummary(req.user!.id);
      res.json(summary);
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /progress/update:
   *   post:
   *     summary: Update progress on a resource
   *     tags: [Progress]
   *     security: [{ bearerAuth: [] }]
   */
  update: async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const result = await progressService.update(req.user!.id, req.body);
      res.json(result);
    } catch (err) {
      next(err);
    }
  },
};