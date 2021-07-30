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
    screens: {
      'xs': '440px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      gray: {
        light: '#F6F6F6',
        DEFAULT: '#707070',
      },
      green: {
        DEFAULT: '#47745b',
        dark: '#3A5D4A',
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
