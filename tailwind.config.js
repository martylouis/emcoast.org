module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
  ],
  theme: {
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
