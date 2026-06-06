import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { userRepository } from '../repositories/userRepository';
import { JWT_SECRET, JWT_EXPIRES_IN, BCRYPT_SALT_ROUNDS } from '../config/auth';
import { AppError } from '../utils/errors';

export const authService = {
  register: async (email: string, password: string, full_name: string) => {
    const existingUser = await userRepository.findByEmail(email);
    if (existingUser) throw new AppError('Email already registered', 409);
    const password_hash = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
    const newUser = await userRepository.createUser({ email, password_hash, full_name });
    // Generate token
    const token = jwt.sign({ userId: newUser.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    return { user: newUser, token };
  },

  login: async (email: string, password: string) => {
    const user = await userRepository.findByEmail(email);
    if (!user) throw new AppError('Invalid credentials', 401);
    const valid = await bcrypt.compare(password, user.password_hash);
    if (!valid) throw new AppError('Invalid credentials', 401);
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
    return { user, token };
  },
};