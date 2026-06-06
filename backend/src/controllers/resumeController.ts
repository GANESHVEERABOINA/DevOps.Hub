// backend/src/controllers/resumeController.ts
import { Request, Response, NextFunction } from 'express';
import { resumeService } from '../services/resumeService';
import { AuthRequest } from '../middlewares/authMiddleware';

export const resumeController = {
  /**
   * @swagger
   * /resumes:
   *   post:
   *     summary: Create a new resume
   *     tags: [Resumes]
   *     security: [{ bearerAuth: [] }]
   */
  create: async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const resume = await resumeService.create(req.user!.id, req.body);
      res.status(201).json(resume);
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /resumes/{id}:
   *   get:
   *     summary: Get a resume by ID
   *     tags: [Resumes]
   *     security: [{ bearerAuth: [] }]
   */
  getById: async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const resume = await resumeService.getById(req.params.id, req.user!.id);
      if (!resume) return res.status(404).json({ message: 'Resume not found' });
      res.json(resume);
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /resumes:
   *   get:
   *     summary: Get all resumes for current user
   *     tags: [Resumes]
   *     security: [{ bearerAuth: [] }]
   */
  getAll: async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const resumes = await resumeService.getAll(req.user!.id);
      res.json(resumes);
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /resumes/{id}:
   *   put:
   *     summary: Update a resume
   *     tags: [Resumes]
   *     security: [{ bearerAuth: [] }]
   */
  update: async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const updated = await resumeService.update(req.params.id, req.user!.id, req.body);
      res.json(updated);
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /resumes/{id}:
   *   delete:
   *     summary: Delete a resume
   *     tags: [Resumes]
   *     security: [{ bearerAuth: [] }]
   */
  delete: async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      await resumeService.delete(req.params.id, req.user!.id);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /resumes/{id}/analyze:
   *   post:
   *     summary: Analyze a resume for ATS score
   *     tags: [Resumes]
   *     security: [{ bearerAuth: [] }]
   */
  analyze: async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const result = await resumeService.analyze(req.params.id, req.user!.id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  },
};