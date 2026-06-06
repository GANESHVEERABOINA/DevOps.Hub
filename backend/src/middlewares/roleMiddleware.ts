import { Response, NextFunction } from 'express';
import { AuthRequest } from './authMiddleware';

// Authorize based on roles
export const authorize = (...allowedRoles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ message: 'Authentication required' });
    }
    // Assuming user.role is populated
    const userRole = (req.user as any).role?.name; // need to load relation
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: 'Forbidden: insufficient privileges' });
    }
    next();
  };
};