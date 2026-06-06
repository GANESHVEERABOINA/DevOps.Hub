import { AppDataSource } from '../config/database';
import { User } from '../entities/User';

export const userRepository = {
  findById: async (id: string) => AppDataSource.getRepository(User).findOneBy({ id }),
  findByEmail: async (email: string) => AppDataSource.getRepository(User).findOneBy({ email }),
  createUser: async (userData: Partial<User>) => {
    const repo = AppDataSource.getRepository(User);
    const user = repo.create(userData);
    return repo.save(user);
  },
  updateUser: async (id: string, data: Partial<User>) => {
    await AppDataSource.getRepository(User).update(id, data);
    return userRepository.findById(id);
  },
};