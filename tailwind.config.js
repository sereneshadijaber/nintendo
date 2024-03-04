/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT ({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        red: '#e60012',
        white: '#ffffff',
        blue: '#0b2b6b',
        lightBlue: '#d6f0fa',
        gray: '#434242',
        lightGray: '#efefef',
        
      },
      dropShadow: {
        'drop_line': '0 35px 35px rgba(0, 0, 0, 0.25)',
        
      },
      borderRadius: {
        'rounded_img': '35px',
        'rounded_btn': '20px'
      },
      colors: {
        red: '#e60012',
        white: '#ffffff',
        blue: '#0b2b6b',
        lightBlue: '#d6f0fa',
        gray: '#434242',
        lightGray: '#efefef',
      },
    },
  },
  plugins: [],
});
