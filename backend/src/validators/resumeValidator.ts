// backend/src/validators/resumeValidator.ts
/**
 * Resume Validators
 */
import { body, param } from 'express-validator';

export const createResumeValidator = [
  body('resume_name').optional().isString(),
  body('personal_info').isObject().withMessage('Personal info must be an object'),
  body('personal_info.full_name').notEmpty().withMessage('Full name is required'),
  body('personal_info.email').isEmail().withMessage('Valid email is required'),
  body('skills').optional().isArray(),
  body('projects').optional().isArray(),
  body('experience').optional().isArray(),
  body('education').optional().isArray(),
  body('certifications').optional().isArray(),
];

export const updateResumeValidator = [
  param('id').isUUID().withMessage('Invalid resume ID'),
  body('resume_name').optional().isString(),
  body('personal_info').optional().isObject(),
];

export const resumeIdValidator = [
  param('id').isUUID().withMessage('Invalid resume ID'),
];