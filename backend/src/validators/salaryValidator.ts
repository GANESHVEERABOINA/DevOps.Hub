// backend/src/validators/salaryValidator.ts
/**
 * Salary Validators
 */
import { query } from 'express-validator';

export const salaryFilterValidator = [
  query('role').optional().isString(),
  query('experience_level')
    .optional()
    .isIn(['fresher', 'junior', 'mid', 'senior', 'lead'])
    .withMessage('Invalid experience level'),
  query('location').optional().isString(),
  query('year').optional().isInt({ min: 2000, max: 2100 }),
];