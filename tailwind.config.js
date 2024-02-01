/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./main.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        butterscotch: '#FF7B47',
        cloudburst: '#1C2752',
        whitesmoke: '#F4F4F4',
        mediumgray: '#7E7E7E',
        greyGoose: '#D2D2D2',
        gainsboro: '#DDDDDD',
        dusk: '#4B557D'
      },
      boxShadow: {
        cloudburst: "0px 0px 8px #1C2752",
        gainsboro: "0px 0px 8px #DDDDDD",
        butterscotch: "0px 0px 8px #FF7B47",
        // FFB342
      }
    },
  },
  plugins: [],
}
