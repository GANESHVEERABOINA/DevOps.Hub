// backend/src/routes/mockInterviewRoutes.ts
/*
 * Mock Interview Routes
 * Why: Start a new interview session, submit answers, get feedback.
 */
import { Router } from 'express';
import { mockInterviewController } from '../controllers/mockInterviewController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.post('/start', authenticate, mockInterviewController.start);
router.post('/:id/answer', authenticate, mockInterviewController.submitAnswer);
router.get('/:id/feedback', authenticate, mockInterviewController.getFeedback);
router.get('/history', authenticate, mockInterviewController.getHistory);

export default router;