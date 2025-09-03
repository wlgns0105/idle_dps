/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        game: {
          primary: '#3b82f6',
          secondary: '#1e40af',
          accent: '#f59e0b',
          danger: '#ef4444',
          success: '#10b981',
          background: '#1f2937',
          surface: '#374151',
          text: '#f9fafb'
        }
      },
      fontFamily: {
        'game': ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
