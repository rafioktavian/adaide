export default {
  server: {
    port: 3033
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'adaide',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'adaide' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/float-label.min.css' },
      { rel: 'stylesheet', href: '/css/icons.css' },
      { rel: 'stylesheet', href: '/css/fonts.css' },
      { rel: 'stylesheet', href: '/css/animate.css' },
      { rel: 'stylesheet', href: '/css/main.css' },
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-awesome-swiper' },
	  { src: '~/plugins/currency' },
    { src: '~/plugins/vee-validate', ssr: false },
	  { src: '~/plugins/vue-page-transition', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  
  loading: { color: '#3B8070' },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  generate: {
      dir: "public"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["vee-validate/dist/rules"],
    /*
      ** Run ESLint on save
      */
    extend(config, ctx) {}
  }
}
