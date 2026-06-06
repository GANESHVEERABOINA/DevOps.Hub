// backend/src/validators/projectValidator.ts
/**
 * Project Validators
 */
import { body, param } from 'express-validator';

export const createProjectValidator = [
  body('title').notEmpty().withMessage('Title is required'),
  body('slug')
    .optional()
    .matches(/^[a-z0-9-]+$/)
    .withMessage('Slug must be lowercase alphanumeric with hyphens'),
  body('category')
    .isIn(['beginner', 'intermediate', 'advanced'])
    .withMessage('Invalid category'),
  body('steps').isArray({ min: 1 }).withMessage('Steps array is required'),
  body('overview').optional().isString(),
  body('learning_outcome').optional().isString(),
];

export const updateProjectValidator = [
  param('id').isUUID().withMessage('Invalid project ID'),
  body('title').optional().notEmpty(),
  body('category')
    .optional()
    .isIn(['beginner', 'intermediate', 'advanced']),
];

export const projectIdValidator = [
  param('id').isUUID().withMessage('Invalid project ID'),
];