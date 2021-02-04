const { API_KEY, API_URL } = process.env
export default {
  // 200.htmlを404.htmlに変更
  generate: {
    fallback: true,
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    titleTemplate(title) {
      return (title ? `${title} | ` : '') + process.env.npm_package_name
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'github-nuxt-static-sample',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'サイトのURL' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: process.env.npm_package_name || '',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '共通ディスクリプション',
      },
      { hid: 'og:image', property: 'og:image', content: '画像のURL' },
      { name: 'twitter:card', content: 'summary' },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Raleway&display=swap',
      },
    ],
  },
  router: {
    base: '/',
    // base: '/nuxt-static-sample/', //元の記述
    // extendRoutes(routes, resolve) {//ページが存在しない場合のリダイレクトの設定
    //   routes.push({
    //     nname: 'notfound',
    //     path: '*',
    //     component: resolve(__dirname, 'pages/index2.vue')
    //   })
    // }
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [{ src: '~/assets/scss/common.scss', lang: 'scss' }],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/filter.js',
    { src: '~/plugins/vee-validate', ssr: true },
    // '~plugins/ui'
    { src: '~/plugins/animatescroll.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios', '@nuxtjs/proxy'],
  axios: {},
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isDev }) {
      if (isDev && process.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
    transpile: ['vee-validate/dist/rules'],
  },
  publicRuntimeConfig: {
    apiUrl: API_URL,
    apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined,
  },
  privateRuntimeConfig: {
    apiKey: API_KEY,
  },
}
