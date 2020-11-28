module.exports = {
  purge: {
    content: [
      './components/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
    ],
    options: {
      whitelist: [
        'text-teal-600',
        'border-teal-600',
        'text-gray-600',
        'border-teal-600',
      ],
    },
  },
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
