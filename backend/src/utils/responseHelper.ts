// backend/src/utils/responseHelper.ts
/**
 * Response Helpers
 * Why: Provide consistent JSON response structures across all controllers.
 * Dependencies: Express Response object.
 */
import { Response } from 'express';

/**
 * Sends a success response with optional data and status code.
 */
export const success = (res: Response, data: any, status = 200) => {
  res.status(status).json({ success: true, data });
};

/**
 * Sends a paginated response.
 */
export const paginated = (res: Response, data: any, total: number, page: number, limit: number) => {
  res.status(200).json({
    success: true,
    data,
    pagination: { total, page, limit, totalPages: Math.ceil(total / limit) },
  });
};