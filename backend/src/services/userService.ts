// backend/src/services/userService.ts
/**
 * User Service – business logic for user profiles.
 * Why: Encapsulates profile retrieval, update, and account deletion.
 * Dependencies: userRepository.
 */
import { userRepository } from '../repositories/userRepository';
import { AppError } from '../utils/errors';

export const userService = {
  getProfile: async (userId: string) => {
    const user = await userRepository.findById(userId);
    if (!user) throw new AppError('User not found', 404);
    // Exclude sensitive fields
    const { password_hash, ...profile } = user;
    return profile;
  },

  updateProfile: async (userId: string, data: any, file?: any) => {
    const updateData: any = { ...data };
    if (file) {
      // In a real app, upload to cloud storage and set avatar_url
      updateData.avatar_url = `/uploads/${file.filename}`;
    }
    const updated = await userRepository.updateUser(userId, updateData);
    const { password_hash, ...rest } = updated!;
    return rest;
  },

  deleteAccount: async (userId: string) => {
    // Mark account as deleted via existing repository API
    await userRepository.updateUser(userId, { deleted: true } as any);
  },
};