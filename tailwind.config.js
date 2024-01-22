/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish","sans-serif"],
       },
       colors: {
         transparent: 'transparent',
         current: 'currentColor',
         'white': '#ffffff',
         'purple': '#3f3cbb',
         'midnight': '#121063',
         'metal': '#565584',
         'tahiti': '#3ab7bf',
         'silver': '#ecebff',
         'bubble-gum': '#ff77e9',
         'bermuda': '#78dcca',
         'lightBlue': '#2b84ea',
         'deepBlue': '#02042a',
         'grayText': '#818597',
         'greenLight': "#61cea6",
       },
     
    },
  },
  plugins: [],
};
