/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Display"', 'sans-serif'],
      },
    },
    colors: {
      'secondary': "#000060",
      'white': "#ffffff",
      'black': "black",
      'blue': "#3F3FFF",
      'btn': "#5C5CFF",
      'red': "#FF4729",
      'fade': "#FAF9FF",
      'pink': "#FFF5EE",
      'primary': {
        100: "#000060",
        500: "#000060",
      }
    },
    maxWidth: {
      'header-full': "1700px",
      '1xl': "625px",
      '3xl': "1000px",
      '6xl': "57rem",
    }
  },
  plugins: [],
}

