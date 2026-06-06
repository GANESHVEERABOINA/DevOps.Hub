// backend/src/validators/roadmapValidator.ts
/**
 * Roadmap Validators
 */
import { body, param } from 'express-validator';

export const createRoadmapValidator = [
  body('title').notEmpty().withMessage('Title is required'),
  body('slug')
    .matches(/^[a-z0-9-]+$/)
    .withMessage('Slug must be lowercase alphanumeric with hyphens'),
  body('description').optional().isString(),
  body('estimated_hours').optional().isInt({ min: 1 }),
];

export const updateRoadmapValidator = [
  param('id').isInt().withMessage('Invalid roadmap ID'),
  body('title').optional().notEmpty(),
  body('slug')
    .optional()
    .matches(/^[a-z0-9-]+$/),
];

export const updateTopicProgressValidator = [
  param('topicId').isInt().withMessage('Invalid topic ID'),
  body('status')
    .isIn(['not_started', 'in_progress', 'completed'])
    .withMessage('Invalid status'),
  body('percent_complete').optional().isFloat({ min: 0, max: 100 }),
];