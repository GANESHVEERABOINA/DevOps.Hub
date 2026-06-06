// backend/tests/unit/services/questionService.test.ts
/// <reference types="jest" />
/**
 * Unit tests for questionService
 */
import { questionService } from '../../../src/services/questionService';
import { questionRepository } from '../../../src/repositories/questionRepository';
import { AppError } from '../../../src/utils/errors';
import { jest, describe, it, expect, beforeEach } from '@jest/globals';

jest.mock('../../../src/repositories/questionRepository');

describe('questionService', () => {
  const sampleQuestion = {
    id: 'q1',
    question_text: 'What is Docker?',
    difficulty: 'basic',
    category: { name: 'Docker', slug: 'docker' },
    related_question_ids: [],
    is_verified: true,
    view_count: 0,
    companyQuestions: [],
    created_at: new Date(),
    updated_at: new Date(),
  };

  const mockedQuestionRepository = questionRepository as jest.Mocked<typeof questionRepository>;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getAllQuestions', () => {
    it('should return list of questions with filters', async () => {
      mockedQuestionRepository.findAll.mockResolvedValue([sampleQuestion]);
      const result = await questionService.getAllQuestions({ category: 'docker' });
      expect(result).toHaveLength(1);
      expect(mockedQuestionRepository.findAll).toHaveBeenCalledWith({ category: 'docker' });
    });
  });

  describe('getQuestionById', () => {
    it('should return question if exists', async () => {
      mockedQuestionRepository.findById.mockResolvedValue(sampleQuestion);
      const q = await questionService.getQuestionById('q1');
      expect(q).toEqual(sampleQuestion);
    });

    it('should throw not found if missing', async () => {
      mockedQuestionRepository.findById.mockResolvedValue(null);
      await expect(questionService.getQuestionById('missing')).rejects.toThrow(AppError);
    });
  });

  describe('createQuestion', () => {
    it('should create a question', async () => {
      const data = { question_text: 'New Q', difficulty: 'basic', category_id: 1 };
      mockedQuestionRepository.create.mockResolvedValue({
        id: 'new',
        question_text: 'New Q',
        difficulty: 'basic',
        category: { name: 'General', slug: 'general' },
        related_question_ids: [],
        is_verified: false,
        view_count: 0,
        companyQuestions: [],
        created_at: new Date(),
        updated_at: new Date(),
      });
      const created = await questionService.createQuestion(data);
      expect(created).toHaveProperty('id');
    });
  });
});