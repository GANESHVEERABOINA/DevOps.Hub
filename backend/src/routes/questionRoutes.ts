// backend/src/routes/questionRoutes.ts
/*
 * Question Routes
 * Why: CRUD for interview questions, filtering by category/difficulty.
 * How to modify: Add endpoints for bulk import, export, or like/dislike.
 */
import { Router } from 'express';
import { questionController } from '../controllers/questionController';
import { authenticate } from '../middlewares/authMiddleware';
import { authorize } from '../middlewares/roleMiddleware';

const router = Router();

// Public routes
router.get('/', questionController.getAll);
router.get('/:id', questionController.getById);

// Protected routes (admin/moderator only)
router.post('/', authenticate, authorize('admin', 'moderator'), questionController.create);
router.put('/:id', authenticate, authorize('admin', 'moderator'), questionController.update);
router.delete('/:id', authenticate, authorize('admin'), questionController.delete);

export default router;