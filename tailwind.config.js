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
