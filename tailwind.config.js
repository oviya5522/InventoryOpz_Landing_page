/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f7',
          100: '#d7e0ec',
          200: '#b0c1d9',
          300: '#7f9bc0',
          400: '#4d6ea1',
          500: '#2f5080',
          600: '#1f3a63',
          700: '#152c4e',
          800: '#0f2140',
          900: '#0a1830',
          950: '#060f20',
        },
        sky: {
          50: '#eef9ff',
          100: '#d9f1ff',
          200: '#b7e6ff',
          300: '#83d5ff',
          400: '#46bdff',
          500: '#1aa3f5',
          600: '#0c83d1',
          700: '#0c68a8',
          800: '#10578a',
          900: '#124a72',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(10, 24, 48, 0.06), 0 8px 24px -12px rgba(10, 24, 48, 0.18)',
      },
      keyframes: {
        reveal: {
          '0%': { opacity: 0, transform: 'translateY(14px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        reveal: 'reveal 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
