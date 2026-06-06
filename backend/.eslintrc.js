// backend/.eslintrc.js
/**
 * ESLint Configuration for Backend (Node.js + TypeScript)
 * Why: Enforce consistent code style, catch potential bugs, and maintain readability.
 * Dependencies: @typescript-eslint/parser, @typescript-eslint/eslint-plugin, eslint, eslint-config-prettier
 * How to modify: Add or adjust rules in the 'rules' object.
 */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier', // Must be last to override conflicting rules
  ],
  env: {
    node: true,
    es2020: true,
  },
  rules: {
    // General
    'no-console': 'warn',
    'no-unused-vars': 'off', // handled by @typescript-eslint
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-misused-promises': 'error',
    // Best practices
    'eqeqeq': ['error', 'always'],
    'curly': ['error', 'all'],
    'no-var': 'error',
    'prefer-const': 'error',
    // Import/export consistency
    '@typescript-eslint/consistent-type-imports': 'error',
  },
  ignorePatterns: ['dist', 'node_modules', '.eslintrc.js', 'jest.config.js'],
};