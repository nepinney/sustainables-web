import webpack from 'webpack';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sustainables',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Nicholas Pinney' },
      { hid: 'app', name: 'description', content: 'Sustainables promote environmentally concious products from a variety of brands. ' +
          'Products made from recycled materials, sourced or made locally, to products that aim to replace single use plastics. Our goal is to promote products and brands' +
          'that reduce our carbon footprint.' },
      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:site_name', property: 'og:site_name', content: 'Sustainables' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.sustainables.site/'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Sustainables'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Shop and discover environmentally conscious products!'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/logoWithBanner.png'
      },
      // {
      //   hid: 'og:image:secure_url',
      //   property: 'og:image:secure_url',
      //   content: 'https://nuxtjs.org/nuxt-card.png'
      // },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Sustainables'
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: 'logo.png' }
    ]
  },
  target: 'static',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/global.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      fileName: 'logo.png'
    },
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery'
      })
    ]
  },
}
