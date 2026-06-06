// backend/src/dto/auth.dto.ts
/**
 * Data Transfer Objects for authentication.
 * Why: Enforce type safety for register/login payloads and responses.
 */

export interface RegisterDto {
  email: string;
  password: string;
  full_name: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    full_name: string;
    avatar_url?: string;
    role: string;
  };
  token: string;
}