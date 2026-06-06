// backend/src/dto/salary.dto.ts
/**
 * DTOs for salary data.
 */

export interface SalaryFilterDto {
  role?: string;
  experience_level?: string;
  location?: string;
  year?: number;
}

export interface SalaryResponse {
  id: number;
  role: string;
  experience_level: string;
  location: string;
  min_salary: number;
  max_salary: number;
  average_salary: number;
  year: number;
}