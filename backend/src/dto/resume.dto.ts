// backend/src/dto/resume.dto.ts
/**
 * DTOs for resume builder.
 */

export interface CreateResumeDto {
  resume_name?: string;
  personal_info: {
    full_name: string;
    email: string;
    phone?: string;
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
  skills: string[];
  projects: ResumeProject[];
  experience: ResumeExperience[];
  education: ResumeEducation[];
  certifications?: string[];
}

export interface ResumeProject {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface ResumeExperience {
  company: string;
  role: string;
  start_date: string;
  end_date?: string;
  description: string;
}

export interface ResumeEducation {
  institution: string;
  degree: string;
  start_year: number;
  end_year?: number;
}

export interface UpdateResumeDto extends Partial<CreateResumeDto> {}

export interface ResumeResponse {
  id: string;
  resume_name?: string;
  personal_info: any;
  skills: any;
  projects: any;
  experience: any;
  education: any;
  certifications: any;
  ats_score?: number;
  created_at: string;
  updated_at: string;
}

export interface ResumeAnalysisResponse {
  ats_score: number;
  suggestions: string[];
}