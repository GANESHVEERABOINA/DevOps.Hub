// backend/src/routes/projectRoutes.ts
/*
 * Project Routes
 * Why: List projects, get single project with steps.
 */
import { Router } from 'express';
import { projectController } from '../controllers/projectController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', projectController.getAll);
router.get('/:slug', projectController.getBySlug);

// Track project completion
router.post('/:id/complete', authenticate, projectController.markComplete);

export default router;