// backend/src/routes/authRoutes.ts
import { Router } from 'express';
import { authController } from '../controllers/authController';
import { authValidator } from '../validators/authValidator';
import { rateLimit } from 'express-rate-limit';

const router = Router();

// Rate limiting for auth endpoints to prevent brute force
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // limit each IP to 20 requests per windowMs
  message: { message: 'Too many attempts, please try again later' },
});

/**
 * @swagger
 * /auth/register:
 * post:
 * summary: Register a new user
 * tags: [Auth]
 */
router.post('/register', authLimiter, authValidator.register, authController.register);

/**
 * @swagger
 * /auth/login:
 * post:
 * summary: Login user and receive JWT
 * tags: [Auth]
 */
router.post('/login', authLimiter, authValidator.login, authController.login);

/**
 * @swagger
 * /auth/google:
 * post:
 * summary: Login user using Google OAuth token
 * tags: [Auth]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * token:
 * type: string
 * responses:
 * 200:
 * description: Successfully logged in with Google
 * 401:
 * description: Google authentication failed
 */
router.post('/google', authLimiter, authController.googleLogin);

export default router;