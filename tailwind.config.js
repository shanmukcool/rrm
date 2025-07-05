/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      colors: {
        // Brand primary color
        brand: {
          primary: '#CC0035',
          secondary: '#FFF9F5',
        },
        // Keep rose colors for compatibility but update values
        rose: {
          50: '#FFF9F5',
          100: '#FFF9F5',
          200: '#FFF9F5',
          300: '#FFF9F5',
          400: '#CC0035',
          500: '#CC0035',
          600: '#CC0035',
          700: '#CC0035',
          800: '#CC0035',
          900: '#CC0035',
        },
        // Text colors
        text: {
          primary: '#000000',
          secondary: '#4B4B4B',
          light: '#FFFFFF',
        },
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 15s linear infinite',
        'spin-reverse': 'spin-reverse 15s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
};