module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ], 
  variants: {
    scrollbar: ['rounded']
  },

  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      primary: '#282828',
      dark_yellow: '#D79921',
      brown_green: '#83A598',
      white: '#EBDBB2',
      danger: '#CC241D',
      danger2: '#FB4934'
    }
  },
  plugins: [
    require("tailwind-scrollbar")
  ]
}
