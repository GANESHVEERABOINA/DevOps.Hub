// backend/src/routes/roadmapRoutes.ts
/*
 * Roadmap Routes
 * Why: Fetch all roadmaps, single roadmap with topics, and topic details.
 * Dependencies: roadmapController, authMiddleware for progress tracking.
 */
import { Router } from 'express';
import { roadmapController } from '../controllers/roadmapController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', roadmapController.getAll);
router.get('/:slug', roadmapController.getBySlug);
router.get('/:slug/topics', roadmapController.getTopics);

// User progress on roadmap topics
router.get('/:slug/progress', authenticate, roadmapController.getUserProgress);
router.put('/topics/:topicId/progress', authenticate, roadmapController.updateTopicProgress);

export default router;