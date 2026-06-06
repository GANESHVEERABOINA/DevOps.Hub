// backend/src/controllers/roadmapController.ts
import { Request, Response, NextFunction } from 'express';
import { roadmapService } from '../services/roadmapService';
import { AuthRequest } from '../middlewares/authMiddleware';

export const roadmapController = {
  /**
   * @swagger
   * /roadmaps:
   *   get:
   *     summary: Get all roadmaps
   *     tags: [Roadmaps]
   */
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roadmaps = await roadmapService.getAll();
      res.json(roadmaps);
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /roadmaps/{slug}:
   *   get:
   *     summary: Get a single roadmap by slug
   *     tags: [Roadmaps]
   */
  getBySlug: async (req: Request<{ slug: string }>, res: Response, next: NextFunction) => {
    try {
      const roadmap = await roadmapService.getBySlug(req.params.slug);
      if (!roadmap) return res.status(404).json({ message: 'Roadmap not found' });
      res.json(roadmap);
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /roadmaps/{slug}/topics:
   *   get:
   *     summary: Get topics of a roadmap
   *     tags: [Roadmaps]
   */
  getTopics: async (req: Request<{ slug: string }>, res: Response, next: NextFunction) => {
    try {
      const topics = await roadmapService.getTopics(req.params.slug);
      res.json(topics);
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /roadmaps/{slug}/progress:
   *   get:
   *     summary: Get user progress on a roadmap
   *     tags: [Roadmaps]
   *     security: [{ bearerAuth: [] }]
   */
  getUserProgress: async (req: AuthRequest & Request<{ slug: string }>, res: Response, next: NextFunction) => {
    try {
      const progress = await roadmapService.getUserProgress(req.user!.id, req.params.slug);
      res.json(progress);
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /roadmaps/topics/{topicId}/progress:
   *   put:
   *     summary: Update progress on a roadmap topic
   *     tags: [Roadmaps]
   *     security: [{ bearerAuth: [] }]
   */
  updateTopicProgress: async (req: AuthRequest & Request<{ topicId: string }>, res: Response, next: NextFunction) => {
    try {
      const result = await roadmapService.updateTopicProgress(req.user!.id, parseInt(req.params.topicId), req.body);
      res.json(result);
    } catch (err) {
      next(err);
    }
  },
};