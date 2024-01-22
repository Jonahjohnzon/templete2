/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '655px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1025px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      // => @media (min-width: 1536px) { ... }
      '3xl' : '1700px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      red:"#FF0035",
      'white': '#ffffff',
      'black': '#000000',
      'midnight': '#B0E88B',
      'metal': '#F6F3E9',
      "green":"#002F31"
    },
    extend: {
      fontFamily:{
        Black:['Archivo Black', 'sans-serif'],
        Poppins:['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
