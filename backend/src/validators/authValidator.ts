// backend/src/validators/authValidator.ts
/**
 * Authentication Validators
 * Why: Validate registration and login input before processing.
 * Dependencies: express-validator, validationResult middleware (optional).
 */
import { body } from 'express-validator';

export const authValidator = {
  register: [
    body('email')
      .isEmail()
      .withMessage('Please provide a valid email')
      .normalizeEmail(),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters'),
    body('full_name')
      .trim()
      .notEmpty()
      .withMessage('Full name is required'),
  ],

  login: [
    body('email')
      .isEmail()
      .withMessage('Please provide a valid email')
      .normalizeEmail(),
    body('password')
      .notEmpty()
      .withMessage('Password is required'),
  ],
};