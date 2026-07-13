/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          950: '#003322',
          900: '#0A4030',
          800: '#145C45',
          700: '#1F7A5C',
          600: '#2A9470',
        },
        canvas: {
          50: '#F9F9F4',
          100: '#F2F2EA',
          200: '#E5E5D8',
        },
        gold: {
          50: '#F8F1E3',
          100: '#E8D5A8',
          300: '#C5A059',
          500: '#B8860B',
          700: '#8B6914',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0, 51, 34, 0.08)',
        glow: '0 0 0 1px rgba(197, 160, 89, 0.35), 0 16px 40px rgba(0, 51, 34, 0.12)',
      },
    },
  },
  plugins: [],
}
