// backend/src/routes/salaryRoutes.ts
/*
 * Salary Routes
 * Why: Fetch salary data filtered by role, experience, location.
 */
import { Router } from 'express';
import { salaryController } from '../controllers/salaryController';

const router = Router();

router.get('/', salaryController.getAll);
router.get('/trends', salaryController.getTrends);

export default router;