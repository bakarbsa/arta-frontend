const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
          artaGreen: '#01BF71',
          artaDark: '#242424',
          artaError: '#FF0000',
          artaBlue : {
            100: '#337CA0',
            200: '#1E465A',
            300: '#195979'
          },
          artaGray: '#7B7B7B'
        },
        boxShadow: {
          'bottom': '0 6px 5px -2px  #CDCDCD'
        }
      },
    },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
