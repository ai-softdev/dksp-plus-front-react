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
        greyGoose: '#D2D2D2'
      },
    },
  },
  plugins: [],
}
