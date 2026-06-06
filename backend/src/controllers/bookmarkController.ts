// backend/src/controllers/bookmarkController.ts
import { Request, Response, NextFunction } from 'express';
import { bookmarkService } from '../services/bookmarkService';
import { AuthRequest } from '../middlewares/authMiddleware';

export const bookmarkController = {
  /**
   * @swagger
   * /bookmarks:
   *   get:
   *     summary: Get all bookmarks for current user
   *     tags: [Bookmarks]
   *     security: [{ bearerAuth: [] }]
   */
  getAll: async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const bookmarks = await bookmarkService.getAll(req.user!.id);
      res.json(bookmarks);
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /bookmarks:
   *   post:
   *     summary: Add a bookmark
   *     tags: [Bookmarks]
   *     security: [{ bearerAuth: [] }]
   */
  create: async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const bookmark = await bookmarkService.create(req.user!.id, req.body);
      res.status(201).json(bookmark);
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /bookmarks/{itemType}/{itemId}:
   *   delete:
   *     summary: Remove a bookmark
   *     tags: [Bookmarks]
   *     security: [{ bearerAuth: [] }]
   */
  remove: async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      await bookmarkService.remove(req.user!.id, req.params.itemType, req.params.itemId);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  },
};