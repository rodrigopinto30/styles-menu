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
        "background-dark" : "#292829",
        "card-dark" : "#1e1e1e",
        "text-dark" : "#929292",
      },
      boxShadow: {
        'neon': '0 0 5px #6A1B9A, 0 0 25px #6A1B9A, 0 0 50px #6A1B9A, 0 0 100px',
      },
      dropShadow: {
          'neon-drop-shadow': [
            '0 0 0px #fff', 
            '0 0 0px #fff', 
            '0 0 0px #fff', 
            '0 0 0px #0fa', 
            '0 0 0px #0fa', 
            '0 0 0px #0fa', 
            '0 0 0px #0fa', 
            '0 0 1px #0fa'
          ]
        }
      

    },
  },
  plugins: [],
}