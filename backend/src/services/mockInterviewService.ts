// backend/src/services/mockInterviewService.ts
/**
 * Mock Interview Service – manages interview flow, answer submission, and feedback.
 */
import { mockInterviewRepository } from '../repositories/mockInterviewRepository';
import { questionRepository } from '../repositories/questionRepository';
import { AppError } from '../utils/errors';

export const mockInterviewService = {
  startSession: async (userId: string, options: any) => {
    // Fetch random questions based on type/difficulty
    const questions = await questionRepository.findAll({
      category: options.category,
      difficulty: options.difficulty,
    });
    const count = Math.min(options.question_count || 10, questions.length);
    const selected = questions.sort(() => 0.5 - Math.random()).slice(0, count);
    const session = await mockInterviewRepository.createSession({
      user: { id: userId } as any,
      interview_type: options.interview_type || 'general',
      started_at: new Date(),
    });
    // We don't store the question list in the session – it's fetched on the fly.
    return { id: session.id, questions: selected.map((q: any) => ({ id: q.id, question_text: q.question_text, difficulty: q.difficulty })) };
  },

  submitAnswer: async (sessionId: string, data: any) => {
    const session = await mockInterviewRepository.findSessionById(sessionId);
    if (!session) throw new AppError('Session not found', 404);
    return mockInterviewRepository.saveAnswer({
      interview: { id: sessionId } as any,
      question: { id: data.question_id } as any,
      user_answer: data.user_answer,
    });
  },

  getFeedback: async (sessionId: string, userId: string) => {
    const session = await mockInterviewRepository.findSessionById(sessionId);
    if (!session) throw new AppError('Session not found', 404);
    if (session.user.id !== userId) throw new AppError('Unauthorized', 403);
    const answers = await mockInterviewRepository.getAnswersBySession(sessionId);
    // Simple scoring logic: for now return placeholder
    const total = answers.length;
    const score = Math.floor(Math.random() * 40 + 60); // In a real app, evaluate answers
    return {
      score,
      strengths: ['Clear communication', 'Good technical depth'],
      weaknesses: ['Need to elaborate on real-world examples'],
      feedback: 'You performed well overall. Focus on providing more context.',
      total_questions: total,
      answered_questions: answers.length,
    };
  },

  getHistory: async (userId: string) => {
    return mockInterviewRepository.getUserSessions(userId);
  },
};