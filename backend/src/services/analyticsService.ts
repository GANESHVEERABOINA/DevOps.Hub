// backend/src/services/analyticsService.ts
/**
 * Analytics Service – platform usage statistics (for admin).
 * Why: Provides insights like total users, questions viewed, etc.
 * Dependencies: User, Question, MockInterview entities via TypeORM.
 */
import { AppDataSource } from '../config/database';
import { User } from '../entities/User';
import { Question } from '../entities/Question';
import { MockInterview } from '../entities/MockInterview';

export const analyticsService = {
  getDashboard: async () => {
    const userRepo = AppDataSource.getRepository(User);
    const questionRepo = AppDataSource.getRepository(Question);
    const interviewRepo = AppDataSource.getRepository(MockInterview);

    const [userCount, questionCount, interviewCount] = await Promise.all([
      userRepo.count(),
      questionRepo.count(),
      interviewRepo.count(),
    ]);
    return {
      totalUsers: userCount,
      totalQuestions: questionCount,
      totalMockInterviews: interviewCount,
    };
  },
};