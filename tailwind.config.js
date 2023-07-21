/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(237, 18%, 59%)',
        'secondary': 'hsl(345, 95%, 68%)',
        'white': 'hsl(0, 0%, 100%)',
        'dark-desaturated': 'hsl(236, 21%, 26%)',
        'very-dark': 'hsl(235, 16%, 14%)',
        'almost-black': 'hsl(234, 17%, 12%)',
      },
      
    },
  },
  plugins: [],
}

