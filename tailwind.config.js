/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./main.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        butterscotch: '#FFB342',
        cloudburst: '#1C2752',
        whitesmoke: '#F4F4F4',
        mediumgray: '#7E7E7E',
        greyGoose: '#D2D2D2',
        gainsboro: '#DDDDDD'
      },
      boxShadow: {
        gainsboro: "0px 0px 8px #DDDDDD",
        butterscotch: "0px 0px 8px #FFB342",
      }
    },
  },
  plugins: [],
}
