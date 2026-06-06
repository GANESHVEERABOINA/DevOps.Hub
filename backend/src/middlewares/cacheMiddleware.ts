// backend/src/middlewares/cacheMiddleware.ts
/**
 * Cache Middleware
 * Why: Improve performance by caching frequent GET responses in Redis.
 * What it does: Checks Redis for a cached response. If found, returns it immediately.
 *               If not, caches the response after the handler executes.
 * Dependencies: redis client, Express response object.
 * How to modify: Change the default TTL, add cache invalidation logic, or skip caching based on request headers.
 * Common Mistakes: Forgetting to handle JSON serialization; caching non-GET requests.
 */

import { Request, Response, NextFunction } from 'express';
import redisClient from '../config/cache';

/**
 * Factory function that returns a cache middleware with a specified TTL.
 * @param duration - Cache duration in seconds (default 60)
 */
export const cacheMiddleware = (duration = 60) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // Only cache GET requests
    if (req.method !== 'GET') {
      return next();
    }

    const key = `cache:${req.originalUrl}`;

    try {
      const cached = await redisClient.get(key);
      if (cached) {
        // Cache hit – return the cached data
        return res.json(JSON.parse(cached));
      }

      // Cache miss – capture the original json method
      const originalJson = res.json.bind(res);

      // Override res.json to cache the response before sending
      res.json = (body: any) => {
        // Store in Redis with expiration
        redisClient.setEx(key, duration, JSON.stringify(body)).catch((err) => {
          console.error('Redis cache write error:', err);
        });
        // Call the original json method
        return originalJson(body);
      };

      next();
    } catch (err) {
      // If Redis is down or another error, skip caching and continue
      console.error('Cache middleware error:', err);
      next();
    }
  };
};