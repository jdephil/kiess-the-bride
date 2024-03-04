import daytime from './src/assets/images/daytime.jpeg'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'wedding-yellow': '#F0ECC0',
        'wedding-green': '#31413e',
        'wedding-purple': '#897994',
      },
      fontFamily: {
        abel: ['Abel', 'sans-sarif'],
        dmSans: ['DM Sans', 'sans-sarif'],
      },
      backgroundImage: {
        daytime: "url('./src/assets/images/daytime.jpeg')",
      },
      spacing: {
        enter: '48%',
        moon: '28%',
      },
      width: {
        large: '28rem',
      },
      gridTemplateRows: {
        detailsMain: 'minmax(0, 1fr) 275px',
      },
      gridTemplateColumns: {
        detailsMain: '50rem 1fr',
      },
      boxShadow: {
        stars: 'inset 0px 0px 46px 21px rgba(240,236,192,1);',
      },
    },
  },
  plugins: [],
}
