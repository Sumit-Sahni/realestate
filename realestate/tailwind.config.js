/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      abc: ['Aboreto', 'cursive'],
      cba: ['Comfortaa', 'cursive']
    },
    // backgroundImage:{
    //   bgimg: `url(${"/src/Photos/blob.jpg"})`
    // }
  },
  plugins: [],
}