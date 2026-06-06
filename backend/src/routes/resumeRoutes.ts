// backend/src/routes/resumeRoutes.ts
/*
 * Resume Routes
 * Why: Save, retrieve, and analyze resume for ATS score.
 */
import { Router } from 'express';
import { resumeController } from '../controllers/resumeController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.post('/', authenticate, resumeController.create);
router.get('/:id', authenticate, resumeController.getById);
router.get('/', authenticate, resumeController.getAll);
router.put('/:id', authenticate, resumeController.update);
router.delete('/:id', authenticate, resumeController.delete);
router.post('/:id/analyze', authenticate, resumeController.analyze);

export default router;