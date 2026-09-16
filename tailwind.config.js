/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          900: '#070a12',
          800: '#0b1120',
          700: '#0f172a',
          600: '#1e293b'
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(56, 189, 248, 0.2), 0 0 20px rgba(56, 189, 248, 0.1)' },
          '100%': { boxShadow: '0 0 15px rgba(56, 189, 248, 0.6), 0 0 35px rgba(56, 189, 248, 0.3)' }
        }
      }
    },
  },
  plugins: [],
}
