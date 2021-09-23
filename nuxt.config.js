export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'rip',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '/around/vendor/tiny-slider/dist/tiny-slider.css',
      },
    ],
    script: [
      {
        type: 'text/javascript',
        src: '/around/vendor/bootstrap/dist/js/bootstrap.bundle.js',
        body: true,
      },
      {
        type: 'text/javascript',
        src: '/around/vendor/simplebar/dist/simplebar.min.js',
        body: true,
      },
      {
        type: 'text/javascript',
        src: '/around/vendor/smooth-scroll/dist/smooth-scroll.polyfills.min.js',
        body: true,
      },
      {
        type: 'text/javascript',
        src: '/around/vendor/tiny-slider/dist/min/tiny-slider.js',
        body: true,
      },
      {
        type: 'text/javascript',
        src: '/around/js/theme.js',
        body: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/around/scss/theme.scss',
    'bootstrap-icons/font/bootstrap-icons.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-resize.ts',
    '~/plugins/vue-format-price.ts',
    '~/plugins/vue-capitalize.ts',
    '~/plugins/vue-truncate.ts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
