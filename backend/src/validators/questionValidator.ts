// backend/src/validators/questionValidator.ts
/**
 * Question Validators
 * Why: Ensure incoming data for question creation/update is valid.
 * Dependencies: express-validator.
 */
import { body, param, query } from 'express-validator';

export const createQuestionValidator = [
  body('category_id').isInt({ min: 1 }).withMessage('Valid category ID required'),
  body('question_text').notEmpty().withMessage('Question text is required'),
  body('difficulty')
    .isIn(['basic', 'intermediate', 'advanced', 'scenario', 'production', 'troubleshooting'])
    .withMessage('Invalid difficulty'),
  body('interview_answer').optional().isString(),
  body('simple_explanation').optional().isString(),
  body('real_world_example').optional().isString(),
  body('common_mistakes').optional().isString(),
  body('related_question_ids').optional().isArray(),
  body('company_id').optional().isInt(),
];

export const updateQuestionValidator = [
  param('id').isUUID().withMessage('Invalid question ID'),
  body('category_id').optional().isInt({ min: 1 }),
  body('question_text').optional().notEmpty(),
  body('difficulty')
    .optional()
    .isIn(['basic', 'intermediate', 'advanced', 'scenario', 'production', 'troubleshooting']),
];

export const questionFilterValidator = [
  query('category').optional().isString(),
  query('difficulty').optional().isString(),
  query('search').optional().isString(),
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 100 }),
];