// backend/src/middlewares/validationMiddleware.ts
/**
 * Validation Middleware
 * Why: Centralizes request validation using express-validator.
 * What it does: Checks the validation result from express-validator and throws a 400 error
 *               with details if any constraint fails.
 * How to use: Import `validateResult` and call it after the validator chain.
 * Dependencies: express-validator.
 * Common Mistakes: Forgetting to call it after the validator array.
 */
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { AppError } from '../utils/errors';

/**
 * Checks if validation errors exist and returns a 400 response with them.
 * Intended to be called after a set of express-validator checks.
 */
export const validateResult = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formatted = errors.array().map((err: any) => ({
      field: err.path,
      message: err.msg,
    }));
    // Throw a custom error or directly respond. Here we throw to the error handler.
    throw new AppError(JSON.stringify(formatted), 400);
  }
  next(); // No errors – continue
};

/**
 * Alternative: a middleware factory that runs validation checks and automatically calls validateResult.
 * Useful for inline use in route definitions.
 * Example: router.post('/', validate(createQuestionValidator), controller.create)
 */
export const validate = (validations: any[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // Execute all validations
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const formatted = errors.array().map((err: any) => ({
      field: err.path,
      message: err.msg,
    }));
    return res.status(400).json({ errors: formatted });
  };
};