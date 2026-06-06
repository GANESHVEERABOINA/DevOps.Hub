// backend/src/routes/userRoutes.ts
/*
 * User Routes
 * Why: Profile management, avatar upload, account deletion.
 * Dependencies: authMiddleware (protect), userController.
 */
import { Router } from 'express';
import { userController } from '../controllers/userController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.get('/me', authenticate, userController.getProfile);
router.put('/profile', authenticate, userController.updateProfile);
router.delete('/account', authenticate, userController.deleteAccount);

export default router;