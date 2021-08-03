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
      screens: {
        'xs': '440px',
      },
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
    fontFamily: {
      custom: ['Roboto Condensed', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
