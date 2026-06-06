// backend/src/routes/achievementRoutes.ts
/*
 * Achievement Routes
 * Why: Get all achievements and user's unlocked achievements.
 */
import { Router } from 'express';
import { achievementController } from '../controllers/achievementController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', achievementController.getAll);
router.get('/user', authenticate, achievementController.getUserAchievements);

export default router;