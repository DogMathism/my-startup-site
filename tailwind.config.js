/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        apple: {
          blue: '#007AFF',
          gray: '#F5F5F7',
          dark: '#1D1D1F',
        },
      },
      fontFamily: {
        system: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}