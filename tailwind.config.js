/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dominan: '#F3F3F3',
        bg: '#EDF3F8',
        aksen: '#108EE9',
        aksin: '#B5E1D0',
        blackRgba: 'rgba(0, 0, 0, 0.54)',
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

