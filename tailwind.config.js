module.exports = {
  purge: [
    // Remove unused styles in production
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: {
        light: '#707070',
        DEFAULT: '#707070',
      },
    },
    extend: {
      backgroundImage: theme => ({
        'trees': "url('~/assets/images/trees.jpeg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
