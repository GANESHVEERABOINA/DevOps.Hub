// backend/src/controllers/companyQuestionController.ts
import { Request, Response, NextFunction } from 'express';
import { companyService } from '../services/companyService';
import { questionService } from '../services/questionService';

export const companyQuestionController = {
  /**
   * @swagger
   * /companies:
   *   get:
   *     summary: Get all companies
   *     tags: [Companies]
   */
  getCompanies: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const companies = await companyService.getAll();
      res.json(companies);
    } catch (err) {
      next(err);
    }
  },

  /**
   * @swagger
   * /companies/{companyId}/questions:
   *   get:
   *     summary: Get questions for a company
   *     tags: [Companies]
   */
  getCompanyQuestions: async (req: Request<{ companyId: string }>, res: Response, next: NextFunction) => {
    try {
      const questions = await questionService.getCompanyQuestions(parseInt(req.params.companyId));
      res.json(questions);
    } catch (err) {
      next(err);
    }
  },
};