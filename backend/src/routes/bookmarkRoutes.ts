// backend/src/routes/bookmarkRoutes.ts
/*
 * Bookmark Routes
 * Why: Create, list, and delete user bookmarks.
 */
import { Router } from 'express';
import { bookmarkController } from '../controllers/bookmarkController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authenticate, bookmarkController.getAll);
router.post('/', authenticate, bookmarkController.create);
router.delete('/:itemType/:itemId', authenticate, bookmarkController.remove);

export default router;