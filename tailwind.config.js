// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const colors = require('tailwindcss/colors');

module.exports = {
   content: ["src/**/*.jsx","./index.html"],
  theme: {
    extend: {
      paddings: {
        '12.5': '50px',
      },
      maxWidth: {
        '4.5xl': '60rem'
      },
      minWidth:{
        'sm' : '218px'
      }
    },
    colors:{
      primary:{
        lightest:"rgb(240, 127, 113)",
        light:"rgb(230, 98, 80)",
        default:"rgb(232, 77, 56)",
        dark:"rgb(217, 43, 20)"
      },
      gray:colors.gray,
      white:colors.white,
      black:colors.black,
      red:colors.red,
      green:colors.green,
      blue:colors.blue,
    }
  },
  plugins: [],
}
