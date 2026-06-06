// backend/src/routes/searchRoutes.ts
/*
 * Search Routes
 * Why: Full-text search across questions, roadmaps, and projects.
 */
import { Router } from 'express';
import { searchController } from '../controllers/searchController';

const router = Router();

router.get('/', searchController.search);

export default router;