// backend/src/controllers/healthController.ts
import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '../config/database';

export const healthController = {
  /**
   * @swagger
   * /health:
   *   get:
   *     summary: Basic health check
   *     tags: [Health]
   */
  check: async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
  },

  /**
   * @swagger
   * /health/db:
   *   get:
   *     summary: Database connectivity check
   *     tags: [Health]
   */
  dbCheck: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await AppDataSource.query('SELECT 1');
      res.status(200).json({ status: 'Database connected' });
    } catch (err) {
      next(err);
    }
  },
};