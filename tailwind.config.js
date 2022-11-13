/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
    },
    extend: {
      colors: {
        mustBlack: '#1D1D1D',
        deepGray: '#303030',
        lightGray: '#454545',
        offWhite: '#f9f9f9',
        mustWhite: '#ffffff',
        placeHolder: '#a1adb5'
      },
    },
  },
  plugins: [],
}
