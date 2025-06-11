/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
        screens: {
          'tablet': '850px',
          'custom1070':'1070px',
        }
    },
  },
   plugins: [require('tailwind-scrollbar-hide')],
}

