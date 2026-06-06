// backend/src/controllers/searchController.ts
import { Request, Response, NextFunction } from 'express';
import { searchService } from '../services/searchService';

export const searchController = {
  /**
   * @swagger
   * /search:
   *   get:
   *     summary: Search across questions, projects, roadmaps
   *     tags: [Search]
   */
  search: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const results = await searchService.search(req.query);
      res.json(results);
    } catch (err) {
      next(err);
    }
  },
};