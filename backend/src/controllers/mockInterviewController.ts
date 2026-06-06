// backend/src/controllers/mockInterviewController.ts
import { Request, Response, NextFunction } from 'express';
import { mockInterviewService } from '../services/mockInterviewService';
import { AuthRequest } from '../middlewares/authMiddleware';

export const mockInterviewController = {
  /**
   * @swagger
   * /mock-interviews/start:
   *   post:
   *     summary: Start a new mock interview session
   *     tags: [MockInterviews]
   *     security: [{ bearerAuth: [] }]
   */
  start: async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const session = await mockInterviewService.startSession(req.user!.id, req.body);
      res.status(201).json(session);
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /mock-interviews/{id}/answer:
   *   post:
   *     summary: Submit an answer for a question in a session
   *     tags: [MockInterviews]
   *     security: [{ bearerAuth: [] }]
   */
  submitAnswer: async (req: AuthRequest & Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const result = await mockInterviewService.submitAnswer(req.params.id, req.body);
      res.json(result);
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /mock-interviews/{id}/feedback:
   *   get:
   *     summary: Get feedback for a completed session
   *     tags: [MockInterviews]
   *     security: [{ bearerAuth: [] }]
   */
  getFeedback: async (req: AuthRequest & Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
      const feedback = await mockInterviewService.getFeedback(req.params.id, req.user!.id);
      if (!feedback) return res.status(404).json({ message: 'Session not found' });
      res.json(feedback);
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /mock-interviews/history:
   *   get:
   *     summary: Get past interview history
   *     tags: [MockInterviews]
   *     security: [{ bearerAuth: [] }]
   */
  getHistory: async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const history = await mockInterviewService.getHistory(req.user!.id);
      res.json(history);
    } catch (err) {
      next(err);
    }
  },
};