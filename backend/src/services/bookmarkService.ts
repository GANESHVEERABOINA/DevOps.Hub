// backend/src/services/bookmarkService.ts
/**
 * Bookmark Service – save / retrieve bookmarks.
 */
import { bookmarkRepository } from '../repositories/bookmarkRepository';
import { AppError } from '../utils/errors';

export const bookmarkService = {
  getAll: async (userId: string) => {
    return bookmarkRepository.findByUser(userId);
  },

  create: async (userId: string, body: any) => {
    const existing = await bookmarkRepository.findOne(userId, body.item_type, body.item_id);
    if (existing) throw new AppError('Already bookmarked', 409);
    return bookmarkRepository.create({
      user: { id: userId } as any,
      item_type: body.item_type,
      item_id: body.item_id,
    });
  },

  remove: async (userId: string, itemType: string, itemId: string) => {
    await bookmarkRepository.remove(userId, itemType, itemId);
  },
};