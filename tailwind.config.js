const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'hero-img': "url('./public/background.jpg')"
      },
      fontFamily: {
        'display': ['Poppins',],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
