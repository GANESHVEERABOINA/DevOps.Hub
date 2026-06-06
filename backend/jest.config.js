// backend/jest.config.js
/**
 * Jest Configuration for DEVOPS.HUB Backend
 * Why: Defines how Jest runs tests, transforms TypeScript, and collects coverage.
 * Dependencies: ts-jest, @types/jest (dev).
 * How to modify: Adjust testMatch for different test file patterns or coverage thresholds.
 */
module.exports = {
  // Use ts-jest preset for TypeScript
  preset: 'ts-jest',

  // The test environment (Node.js)
  testEnvironment: 'node',

  // Root directory for tests
  roots: ['<rootDir>/tests'],

  // File patterns for test discovery
  testMatch: [
    '**/__tests__/**/*.ts',
    '**/?(*.)+(spec|test).ts',
  ],

  // Transform TypeScript files with ts-jest
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },

  // Path aliases (mirror tsconfig.json if used)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // Files to collect coverage from
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/server.ts',
    '!src/app.ts',
    '!src/config/**',
  ],

  // Coverage output directory
  coverageDirectory: 'coverage',

  // Coverage reporters
  coverageReporters: ['text', 'lcov', 'html'],

  // Set coverage thresholds (optional)
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },

  // Maximum time for a test (in milliseconds)
  testTimeout: 10000,

  // Clear mocks automatically before each test
  clearMocks: true,

  // Restore mocks automatically after each test
  restoreMocks: true,

  // Verbose output (show individual test names)
  verbose: true,
};