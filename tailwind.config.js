const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*{.js,.md,.mdx}'],
  theme: {
    colors: {
      gray: colors.blueGray,
      blue: colors.blue,
      teal: colors.teal,
      orange: colors.amber,
      pink: colors.pink,
      white: colors.white,
      purple: colors.purple,
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
  },
};
