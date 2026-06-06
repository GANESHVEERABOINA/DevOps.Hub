/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#6366f1', dark: '#4f46e5', light: '#a5b4fc' },
        secondary: '#ec4899',
        accent: '#14b8a6',
      },
    },
  },
  plugins: [],
};