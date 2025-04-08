/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        fold: "260px",     
        iphone: "280px",   
        ipad: "400px"      
      }
    },
  },
  plugins: [],
}
