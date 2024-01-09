/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      },
      boxShadow: {
        'neon': '0 0 5px #6A1B9A, 0 0 25px #6A1B9A, 0 0 50px #6A1B9A, 0 0 100px',
        //'dark': '0px 1px 7px -2px #6A1B9A',
        'dark': '0 0 5px #6A1B9A, 0 0 25px #6A1B9A, 0 0 50px #6A1B9A, 0 0 100px'
      }
    },
  },
  plugins: [],
}

