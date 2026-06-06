// backend/src/repositories/mockInterviewRepository.ts
/**
 * Mock Interview Repository – manages interview sessions and answers.
 */
import { AppDataSource } from '../config/database';
import { MockInterview } from '../entities/MockInterview';
import { InterviewAnswer } from '../entities/InterviewAnswer';

export const mockInterviewRepository = {
  createSession: async (data: Partial<MockInterview>) => {
    return AppDataSource.getRepository(MockInterview).save(data);
  },

  findSessionById: async (id: string) => {
    return AppDataSource.getRepository(MockInterview).findOne({ where: { id } });
  },

  saveAnswer: async (data: Partial<InterviewAnswer>) => {
    return AppDataSource.getRepository(InterviewAnswer).save(data);
  },

  getAnswersBySession: async (sessionId: string) => {
    return AppDataSource.getRepository(InterviewAnswer).find({
      where: { interview: { id: sessionId } },
      relations: ['question'],
    });
  },

  getUserSessions: async (userId: string) => {
    return AppDataSource.getRepository(MockInterview).find({
      where: { user: { id: userId } },
      order: { started_at: 'DESC' },
    });
  },
};