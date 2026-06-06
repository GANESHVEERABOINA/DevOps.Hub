import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/authService';
import { validateResult } from '../middlewares/validationMiddleware';

export const authController = {
  /**
   * @swagger
   * /auth/register:
   *   post:
   *     summary: Register new user
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email: string
   *               password: string
   *               full_name: string
   *     responses:
   *       201: { description: User created }
   */
  register: async (req: Request, res: Response, next: NextFunction) => {
    try {
      validateResult(req, res, next);
      const { email, password, full_name } = req.body;
      const result = await authService.register(email, password, full_name);
      res.status(201).json(result);
    } catch (err) {
      next(err);
    }
  },

  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;
      const result = await authService.login(email, password);
      res.json(result);
    } catch (err) {
      next(err);
    }
  },
};