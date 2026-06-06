import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger';
import { AppError } from '../utils/errors';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.stack);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Internal Server Error' });
};