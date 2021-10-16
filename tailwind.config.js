module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      'midNight': '#243443',
      'green': '#2DF6AE'
    }),
    textColor: theme => ({
      'midNight': '#243443',
      'green': '#2DF6AE',
      'white':'#FFFFFF'
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
