import { Request, Response, NextFunction } from 'express';
import { questionService } from '../services/questionService';

export const questionController = {
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const questions = await questionService.getAllQuestions(req.query);
      res.json(questions);
    } catch (err) { next(err); }
  },
  getById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const q = await questionService.getQuestionById(req.params.id);
      res.json(q);
    } catch (err) { next(err); }
  },
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const q = await questionService.createQuestion(req.body);
      res.status(201).json(q);
    } catch (err) { next(err); }
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const q = await questionService.updateQuestion(req.params.id, req.body);
      res.json(q);
    } catch (err) { next(err); }
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await questionService.deleteQuestion(req.params.id);
      res.status(204).send();
    } catch (err) { next(err); }
  },
};