// backend/src/dto/project.dto.ts
/**
 * DTOs for hands-on projects.
 */

export interface CreateProjectDto {
  title: string;
  slug: string;
  description?: string;
  category: 'beginner' | 'intermediate' | 'advanced';
  overview?: string;
  architecture_diagram_url?: string;
  steps: ProjectStep[];
  expected_output?: string;
  learning_outcome?: string;
}

export interface ProjectStep {
  step: string;
  detail: string;
}

export interface UpdateProjectDto extends Partial<CreateProjectDto> {}

export interface ProjectResponse {
  id: string;
  title: string;
  slug: string;
  description?: string;
  category: string;
  overview?: string;
  architecture_diagram_url?: string;
  steps: ProjectStep[];
  expected_output?: string;
  learning_outcome?: string;
  created_at: string;
}

export interface ProjectFilterDto {
  category?: string;  // beginner, intermediate, advanced
}