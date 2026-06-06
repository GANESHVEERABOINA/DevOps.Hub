// backend/src/routes/healthRoutes.ts
/*
 * Health Check Routes
 * Why: Monitor application health and database connectivity.
 * How to modify: Add checks for Redis, external APIs, etc.
 */
import { Router } from 'express';
import { healthController } from '../controllers/healthController';

const router = Router();

router.get('/', healthController.check);
router.get('/db', healthController.dbCheck);

export default router;