/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  prefix: 'sb-',
  theme: {
    colors: {
      'primary-red': '#dc4343',
      'regular-red': '#f14336',
      'dark-red': '#E73F3F',
      burgundy: '#C02727',
      grey: '#E1E1E1',
      'dark-grey': '#222124',
      'secondary-grey': '#5f5f61',
      'mid-grey': '#a1a0a3',
      'regular-grey': '#f5f5f5',
      'light-grey': '#f6f6f6',
      charcoal: '#E6E6E6',
      'light-pink': '#FFC9CC',
      'pale-pink': '#DC8D8D',
      'primary-orange': '#FF764C',
      'secondary-orange': '#E65E22',
      black: '#181818',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
    extend: {
      boxShadow: {
        light: '0 3px 4px rgba(103, 103, 103, 0.1)',
        default: '0px 1px 2px rgba(24, 24, 28, 0.06)',
        strong: '0 3px 8px rgba(117, 117, 117, 0.4)',
      },
    },
  },
  plugins: [],
};
