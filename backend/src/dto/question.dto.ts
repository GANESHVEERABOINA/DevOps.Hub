// backend/src/dto/question.dto.ts
/**
 * DTOs for interview questions.
 * Why: Define the shape of question data for CRUD operations and filtering.
 */

export interface CreateQuestionDto {
  category_id: number;
  question_text: string;
  simple_explanation?: string;
  interview_answer?: string;
  real_world_example?: string;
  common_mistakes?: string;
  difficulty: 'basic' | 'intermediate' | 'advanced' | 'scenario' | 'production' | 'troubleshooting';
  related_question_ids?: string[];
  company_id?: number;
}

export interface UpdateQuestionDto extends Partial<CreateQuestionDto> {
  is_verified?: boolean;
}

export interface QuestionFilterDto {
  category?: string;      // slug
  difficulty?: string;
  search?: string;
  page?: number;
  limit?: number;
}

export interface QuestionResponse {
  id: string;
  question_text: string;
  simple_explanation?: string;
  interview_answer?: string;
  real_world_example?: string;
  common_mistakes?: string;
  difficulty: string;
  category: {
    id: number;
    name: string;
    slug: string;
  };
  related_question_ids?: string[];
  is_verified: boolean;
  view_count: number;
  created_at: string;
  updated_at: string;
}