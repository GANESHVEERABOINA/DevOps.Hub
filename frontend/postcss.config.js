// frontend/postcss.config.js
/*
 * PostCSS Configuration
 * Why: Processes CSS with Tailwind CSS and Autoprefixer for cross-browser compatibility.
 * Dependencies: tailwindcss, autoprefixer (both installed via npm).
 * How to modify: Add additional PostCSS plugins (e.g., postcss-nested) if needed.
 * Common Mistakes: Forgetting to install both packages; missing this file entirely.
 */
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};