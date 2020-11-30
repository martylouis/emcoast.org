const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.tsx'],
  theme: {
    colors: {
      gray: colors.blueGray,
      blue: colors.blue,
      teal: colors.teal,
      orange: colors.amber,
      pink: colors.pink,
      white: colors.white,
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
