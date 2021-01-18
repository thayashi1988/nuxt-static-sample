// const axios = require("axios")
const { API_KEY, API_URL } = process.env
export default {
  //200.htmlを404.htmlに変更
  generate: {
    fallback: true,
    // async routes() {
    //   const pages = await axios
    //     .get(`https://nuxtnews.microcms.io/api/v1/information`, {
    //       headers: { 'X-API-KEY': process.env.API_KEY }
    //     })
    //     .then((res) =>
    //       res.data.contents.map((content) => ({
    //         route: `/information/${content.id}`,
    //         payload: content
    //       }))
    //     )
    //   return pages
    // }
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate(title) {
      return (title ? `${title} | ` : '') + process.env.npm_package_name
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/nuxt-static-sample/favicon.ico' }],
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
    // routes() {
    //   const information = axios
    //     .get(`${process.env.API_URL}/information`, {
    //       headers: { 'X-API-KEY': process.env.API_KEY },
    //     })
    //     .then((res) => {
    //       return res.data.contents.map((information) => {
    //         return '/information/' + information.id
    //       })
    //     })
    //   return Promise.all([information]).then((values) => {
    //     return values.join().split(',')
    //   })
    // },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/filter.js',],

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
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  // proxy: {
  //   '/api/v1': {
  //     target: API_URL,
  //     pathRewrite: {
  //       '^/api/v1': ''
  //     },
  //     changeOrigin: true,
  //     secure: false
  //   }
  // },
  axios: {
    // proxy: true,
    // prefix: '/api/v1',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config, { isDev }) {
      if (isDev && process.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  publicRuntimeConfig: {
    apiUrl: API_URL
  },
  privateRuntimeConfig: {
    apiKey: API_KEY
  },
}
