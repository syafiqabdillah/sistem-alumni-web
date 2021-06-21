export default {
  server: {
    port: process.env.PORT ? process.env.PORT : 3000 // default: 3000
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sistem Alumni Yayasan Asy Syaamil',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Sistem Alumni Yayasan Asy Syaamil Bontang. Melingkupi TKIT Qurrota Ayun, SDIT Asy Syaamil, SMPIT DHBS, dan SMAIT DHBS.' },
      { hid: 'og:description', name: 'og:description', content: 'Sistem Alumni Yayasan Asy Syaamil Bontang. Melingkupi TKIT Qurrota Ayun, SDIT Asy Syaamil, SMPIT DHBS, dan SMAIT DHBS.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-vue/dist/bootstrap-vue.css',
    'vueperslides/dist/vueperslides.css',
    '~/assets/icofont/icofont.min.css',
    'vue-good-table/dist/vue-good-table.css',
    '~/assets/css/global.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/utils.js',
    '~/plugins/aos.js',
    '~/plugins/vue-good-table.js',
    '~/plugins/bootstrap.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'vue-social-sharing/nuxt',
  ],

  axios: {
    baseUrl: process.env.BASE_API_URL,
    proxy: true
  },

  proxy: {
    '/api/': {
      target: process.env.BASE_API_URL,
      pathRewrite: {
        '^/api/': ''
      }
    },
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      theme_color: '#f7f7f7'
    },
    manifest: {
      lang: 'en',
      short_name: 'Sistem Alumni Asy Syaamil',
      name: 'Sistem Alumni',
      background_color: '#f7f7f7'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    isProduction: process.env.NODE_ENV === 'production',
    useMock: false,
    BASE_API_URL: process.env.BASE_API_URL
  },

  generate: {
    fallback: true
  },

}
