// backend/src/routes/index.ts
/*
 * Main Router Aggregator
 * Why: Combines all resource-specific route files into a single router
 *      that gets mounted in app.ts at /api/v1.
 * How to modify: Add new route modules here as new resources are created.
 */
import { Router } from 'express';
import authRoutes from './authRoutes';
import userRoutes from './userRoutes';
import questionRoutes from './questionRoutes';
import roadmapRoutes from './roadmapRoutes';
import projectRoutes from './projectRoutes';
import mockInterviewRoutes from './mockInterviewRoutes';
import salaryRoutes from './salaryRoutes';
import resumeRoutes from './resumeRoutes';
import bookmarkRoutes from './bookmarkRoutes';
import achievementRoutes from './achievementRoutes';
import companyQuestionRoutes from './companyQuestionRoutes';
import progressRoutes from './progressRoutes';
import searchRoutes from './searchRoutes';
import healthRoutes from './healthRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/questions', questionRoutes);
router.use('/roadmaps', roadmapRoutes);
router.use('/projects', projectRoutes);
router.use('/mock-interviews', mockInterviewRoutes);
router.use('/salaries', salaryRoutes);
router.use('/resumes', resumeRoutes);
router.use('/bookmarks', bookmarkRoutes);
router.use('/achievements', achievementRoutes);
router.use('/companies', companyQuestionRoutes); // Also serves /companies endpoint
router.use('/progress', progressRoutes);
router.use('/search', searchRoutes);
router.use('/health', healthRoutes);

export default router;