// backend/src/repositories/bookmarkRepository.ts
/**
 * Bookmark Repository – manage user bookmarks.
 */
import { AppDataSource } from '../config/database';
import { Bookmark } from '../entities/Bookmark';

export const bookmarkRepository = {
  findByUser: async (userId: string) => {
    return AppDataSource.getRepository(Bookmark).find({
      where: { user: { id: userId } },
      order: { created_at: 'DESC' },
    });
  },

  create: async (data: { user: any; item_type: string; item_id: string }) => {
    return AppDataSource.getRepository(Bookmark).save(data);
  },

  remove: async (userId: string, itemType: string, itemId: string) => {
    return AppDataSource.getRepository(Bookmark).delete({
      user: { id: userId },
      item_type: itemType,
      item_id: itemId,
    });
  },

  findOne: async (userId: string, itemType: string, itemId: string) => {
    return AppDataSource.getRepository(Bookmark).findOne({
      where: { user: { id: userId }, item_type: itemType, item_id: itemId },
    });
  },
};