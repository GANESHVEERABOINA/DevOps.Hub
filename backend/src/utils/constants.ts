// backend/src/utils/constants.ts
/**
 * Application-wide constants
 * Why: Avoid magic numbers and strings scattered in the codebase.
 * How to modify: Add new constants here as the app grows.
 */

// Pagination defaults
export const PAGINATION_LIMIT = 20;
export const MAX_PAGINATION_LIMIT = 100;

// Cache TTL in seconds
export const CACHE_TTL_SHORT = 60;     // 1 minute
export const CACHE_TTL_MEDIUM = 300;   // 5 minutes
export const CACHE_TTL_LONG = 3600;    // 1 hour

// User roles
export const ROLES = {
  USER: 'user',
  ADMIN: 'admin',
  MODERATOR: 'moderator',
};

// Resource types for progress tracking
export const RESOURCE_TYPES = {
  ROADMAP_TOPIC: 'roadmap_topic',
  PROJECT: 'project',
  QUESTION_CATEGORY: 'question_category',
};

// Item types for bookmarks
export const ITEM_TYPES = {
  QUESTION: 'question',
  PROJECT: 'project',
  ROADMAP: 'roadmap',
};

// Mock interview defaults
export const DEFAULT_INTERVIEW_QUESTIONS = 10;
export const DEFAULT_INTERVIEW_TIME_MINUTES = 15;