/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: { padding: '2rem', },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'principal': '#013051',
      'secondary': '#014676',
      'terciary': '#005C9C',
      'black': '#000000',
      'white': '#ffffff',
      'gray': '#E6E6E6',
      'red': '#b91c1c',
    },
    extend: {},
  },
  plugins: [],
}