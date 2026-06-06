// backend/src/routes/companyQuestionRoutes.ts
/*
 * Company Questions Routes
 * Why: List companies and get their associated interview questions.
 */
import { Router } from 'express';
import { companyQuestionController } from '../controllers/companyQuestionController';

const router = Router();

// List all companies
router.get('/', companyQuestionController.getCompanies);

// Questions for a specific company
router.get('/:companyId/questions', companyQuestionController.getCompanyQuestions);

export default router;