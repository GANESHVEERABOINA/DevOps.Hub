// frontend/src/vite-env.d.ts
/*
 * Vite Environment Type Declarations
 * Why: Provides TypeScript definitions for Vite-specific features like import.meta.env
 *      and module types for non-JS files (CSS, images, etc.).
 * Dependencies: Vite, TypeScript.
 * How to modify: Add custom env variable types here under ImportMetaEnv interface.
 * Common Mistakes: Forgetting to reference this file in tsconfig.json "include" or "types".
 */

/// <reference types="vite/client" />

/**
 * Augment the ImportMeta interface to include our custom environment variables.
 * Example: VITE_API_URL, VITE_APP_TITLE, etc.
 */
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // Add more variables as needed:
  // readonly VITE_APP_TITLE: string;
  // readonly VITE_GA_TRACKING_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/*
 * Declare module types for assets so TypeScript doesn't complain on imports.
 * This is typically already covered by 'vite/client' reference, but we can be explicit.
 */
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.css' {
  const content: string;
  export default content;
}