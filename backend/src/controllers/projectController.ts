// backend/src/controllers/projectController.ts
import { Request, Response, NextFunction } from 'express';
import { projectService } from '../services/projectService';
import { AuthRequest } from '../middlewares/authMiddleware';

export const projectController = {
  /**
   * @swagger
   * /projects:
   *   get:
   *     summary: Get all projects
   *     tags: [Projects]
   */
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projects = await projectService.getAll(req.query);
      res.json(projects);
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /projects/{slug}:
   *   get:
   *     summary: Get a project by slug
   *     tags: [Projects]
   */
  getBySlug: async (req: Request<{ slug: string }>, res: Response, next: NextFunction) => {
    try {
      const project = await projectService.getBySlug(req.params.slug);
      if (!project) return res.status(404).json({ message: 'Project not found' });
      res.json(project);
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /projects/{id}/complete:
   *   post:
   *     summary: Mark a project as completed
   *     tags: [Projects]
   *     security: [{ bearerAuth: [] }]
   */
  markComplete: async (req: Request<{ id: string }> & AuthRequest, res: Response, next: NextFunction) => {
    try {
      const result = await projectService.markComplete(req.user!.id, req.params.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  },
};