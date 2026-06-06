// backend/src/routes/progressRoutes.ts
/*
 * User Progress Routes
 * Why: Track and retrieve user progress across roadmaps, projects, and questions.
 */
import { Router } from 'express';
import { progressController } from '../controllers/progressController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.get('/summary', authenticate, progressController.getSummary);
router.post('/update', authenticate, progressController.update);

export default router;