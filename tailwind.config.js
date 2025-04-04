/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        iphone:"280px",
        ipad:"400px",
        fold:"260px"
      }
    },
  },
  plugins: [],
}