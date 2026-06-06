// backend/src/controllers/userController.ts
import { Request, Response, NextFunction } from 'express';
// Define a minimal Multer file type locally to avoid depending on multer types here
type MulterFile = {
  /** Field name specified in the form */
  fieldname: string;
  /** Name of the file on the user's computer */
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination?: string;
  filename?: string;
  path?: string;
  buffer?: Buffer;
};
import { userService } from '../services/userService';
import { AuthRequest } from '../middlewares/authMiddleware';

export const userController = {
  /**
   * @swagger
   * /users/me:
   *   get:
   *     summary: Get current user profile
   *     tags: [Users]
   *     security: [{ bearerAuth: [] }]
   */
  getProfile: async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      const user = await userService.getProfile(req.user!.id);
      res.json(user);
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /users/profile:
   *   put:
   *     summary: Update user profile
   *     tags: [Users]
   *     security: [{ bearerAuth: [] }]
   */
  updateProfile: async (req: AuthRequest & { file?: MulterFile }, res: Response, next: NextFunction) => {
    try {
      const updated = await userService.updateProfile(req.user!.id, req.body, req.file);
      res.json(updated);
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /users/account:
   *   delete:
   *     summary: Delete user account
   *     tags: [Users]
   *     security: [{ bearerAuth: [] }]
   */
  deleteAccount: async (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      await userService.deleteAccount(req.user!.id);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  },
};