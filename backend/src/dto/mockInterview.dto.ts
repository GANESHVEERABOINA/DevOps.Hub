// backend/src/dto/mockInterview.dto.ts
/**
 * DTOs for mock interview sessions.
 */

export interface StartInterviewDto {
  interview_type?: string;   // e.g., 'devops', 'hr'
  question_count?: number;   // default 10
  difficulty?: string;       // mixed, basic, etc.
}

export interface SubmitAnswerDto {
  question_id: string;
  user_answer: string;
}

export interface InterviewSessionResponse {
  id: string;
  user_id: string;
  started_at: string;
  questions: InterviewQuestionDto[];
}

export interface InterviewQuestionDto {
  id: string;
  question_text: string;
  difficulty: string;
}

export interface InterviewFeedbackResponse {
  score: number;
  strengths: string[];
  weaknesses: string[];
  feedback: string;
  total_questions: number;
  answered_questions: number;
}