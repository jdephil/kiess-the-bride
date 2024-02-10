import daytime from './src/assets/images/daytime.jpeg'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'wedding-yellow': '#F0ECC0',
        'wedding-green': '#31413d',
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
        moon: '43%',
      },
      width: {
        large: '28rem',
      },
    },
  },
  plugins: [],
}
