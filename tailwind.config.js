const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      green: '#01BF71',
      blue : {
        100: '#337CA0',
        200: '#1E465A',
        300: '#195979'
      },
      gray: '#7B7B7B'
    },
    boxShadow: {
      'bottom': '0 6px 5px -2px  #CDCDCD'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
