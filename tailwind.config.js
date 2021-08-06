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
      fontSize: {
        'xxs': '.65rem',
      },
      spacing: {
        'phone': '2rem',
        'laptop': '4rem',
        '30': '7.5rem'
      }
    },
    colors: {
      gray: {
        light: 'white',
        // light: '#F6F6F6',
        DEFAULT: '#707070',
      },
      green: {
        DEFAULT: '#47745b',
        dark: '#3A5D4A',
      },
      beige: {
        DEFAULT: '#EFECE8'
      }
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
