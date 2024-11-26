/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'principal': '#013051',
      'secondary': '#014676',
      'terciary': '#005C9C',
    },
    extend: {},
  },
  plugins: [],
}