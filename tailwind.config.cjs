/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    

    extend: {
      colors : {
        whiteTitle : "#BDCDD6",
        primaryBlue : "#025583"
      },
    },
  },
  plugins: [],
}
