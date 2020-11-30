const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*{.js,.md,.mdx}'],
  theme: {
    colors: {
      gray: colors.blueGray,
      blue: colors.blue,
      teal: colors.emerald,
      orange: colors.amber,
      pink: colors.pink,
      white: colors.white,
      purple: colors.purple,
      green: colors.green,
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
  },
};
