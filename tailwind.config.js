/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#05070F',
          900: '#0B1020',
          800: '#111A33',
          700: '#182348',
          600: '#20305E',
        },
        canvas: {
          50: '#F7F8FB',
          100: '#EEF1F7',
          200: '#DDE3F2',
        },
        gold: {
          50: '#FFF8E7',
          100: '#FFEDC2',
          300: '#F6C45E',
          500: '#D9A441',
          700: '#A8761D',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(5, 7, 15, 0.18)',
        glow: '0 0 0 1px rgba(246, 196, 94, 0.18), 0 20px 60px rgba(5, 7, 15, 0.25)',
      },
    },
  },
  plugins: [],
}
