// backend/tests/unit/services/authService.test.ts
/// <reference types="jest" />
import { jest, describe, it, expect, beforeEach } from '@jest/globals';
/**
 * Unit tests for authService
 */
import { authService } from '../../../src/services/authService';
import * as userRepo from '../../../src/repositories/userRepository';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AppError } from '../../../src/utils/errors';

jest.mock('../../../src/repositories/userRepository');
jest.mock('bcryptjs');
jest.mock('jsonwebtoken');

// Helpers to satisfy TypeScript for mocked functions
const mockedUserRepo = userRepo as unknown as {
  userRepository: {
    findByEmail: jest.Mock<Promise<any>, [string]>;
    createUser: jest.Mock<Promise<any>, [any]>;
  };
};
const mockedBcrypt = bcrypt as unknown as {
  hash: jest.Mock<Promise<string>, [string, string | number]>;
  compare: jest.Mock<Promise<boolean>, [string, string]>;
};
const mockedJwt = jwt as unknown as { sign: jest.Mock<string, [Record<string, any>, string | jwt.Secret]> };


describe('authService', () => {
  const mockUser = {
    id: 'user-1',
    email: 'test@test.com',
    password_hash: 'hashed-password',
    full_name: 'Test User',
    role: { name: 'user' },
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('register', () => {
    it('should create a user and return a token', async () => {
      mockedUserRepo.userRepository.findByEmail.mockResolvedValue(null);
      mockedBcrypt.hash.mockResolvedValue('hashed');
      mockedUserRepo.userRepository.createUser.mockResolvedValue(mockUser);
      mockedJwt.sign.mockReturnValue('fake-token');

      const result = await authService.register('test@test.com', 'password', 'Test User');
      expect(result.user).toEqual(mockUser);
      expect(result.token).toBe('fake-token');
      expect(userRepo.userRepository.findByEmail).toHaveBeenCalledWith('test@test.com');
      expect(bcrypt.hash).toHaveBeenCalledWith('password', expect.any(Number));
    });

    it('should throw error if email already exists', async () => {
      mockedUserRepo.userRepository.findByEmail.mockResolvedValue(mockUser);
      await expect(
        authService.register('test@test.com', 'password', 'Test')
      ).rejects.toThrow(AppError);
    });
  });

  describe('login', () => {
    it('should return token for valid credentials', async () => {
      mockedUserRepo.userRepository.findByEmail.mockResolvedValue(mockUser);
      mockedBcrypt.compare.mockResolvedValue(true);
      mockedJwt.sign.mockReturnValue('login-token');

      const result = await authService.login('test@test.com', 'password');
      expect(result.token).toBe('login-token');
    });

    it('should throw error for invalid email', async () => {
      mockedUserRepo.userRepository.findByEmail.mockResolvedValue(null);
      await expect(authService.login('bad@email.com', 'pass')).rejects.toThrow(AppError);
    });

    it('should throw error for wrong password', async () => {
      mockedUserRepo.userRepository.findByEmail.mockResolvedValue(mockUser);
      mockedBcrypt.compare.mockResolvedValue(false);
      await expect(authService.login('test@test.com', 'wrong')).rejects.toThrow(AppError);
    });
  });
});