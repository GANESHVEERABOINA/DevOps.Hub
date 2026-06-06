// backend/src/controllers/salaryController.ts
import { Request, Response, NextFunction } from 'express';
import { salaryService } from '../services/salaryService';

export const salaryController = {
  /**
   * @swagger
   * /salaries:
   *   get:
   *     summary: Get salary data with filters
   *     tags: [Salaries]
   */
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await salaryService.getAll(req.query);
      res.json(data);
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /salaries/trends:
   *   get:
   *     summary: Get salary trends over time
   *     tags: [Salaries]
   */
  getTrends: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const trends = await salaryService.getTrends();
      res.json(trends);
    } catch (err) {
      next(err);
    }
  },
};