// backend/src/validators/mockInterviewValidator.ts
/**
 * Mock Interview Validators
 */
import { body, param } from 'express-validator';

export const startInterviewValidator = [
  body('interview_type').optional().isString(),
  body('question_count').optional().isInt({ min: 1, max: 50 }),
  body('difficulty').optional().isString(),
];

export const submitAnswerValidator = [
  param('id').isUUID().withMessage('Invalid session ID'),
  body('question_id').isUUID().withMessage('Valid question ID required'),
  body('user_answer').notEmpty().withMessage('Answer cannot be empty'),
];

export const getFeedbackValidator = [
  param('id').isUUID().withMessage('Invalid session ID'),
];