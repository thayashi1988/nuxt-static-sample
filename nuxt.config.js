import axios from 'axios'
const { API_KEY, API_URL, GA_ID_UA, GA_ID_G } = process.env

export default {
  // 200.htmlを404.htmlに変更
  generate: {
    fallback: true,
    // async routes() {
    //   const limit = 100
    //   const test = await axios.get(`${API_URL}/blog/?limit${limit}`, {
    //     headers: { 'X-API-KEY': API_KEY },
    //   })
    //   test.data.contents.map((id) => {
    //     return id.id
    //   })
    //   aaa = [...test]
    //   console.log('aaa:', ...aaa)
    // },
    exclude: [
      '/draft/draft',
      '/b1ds_cn8j',
      '/dn77b47blq20',
      '/dte6g848li',
      '/dvd-n5oi_d',
      '/pi9iljjr_mn',
      '/ula7ft_9qi',
    ],
  },
  server: {
    port: 9000, // デフォルト: 3000
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // ssr: false,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    titleTemplate(title) {
      return (title ? `${title} | ` : '') + 'ぱくもぐブログ'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '沖縄在住のWebコーダーのぱくもぐブログ兼ポートフォリオサイトです。これまでのHTML、CSS、javascriptの経験・実績、日々の暮らしなどを紹介します。',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'ぱくもぐブログ',
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: 'https://pakumogu.xyz' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'ぱくもぐブログ',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '沖縄在住のWebコーダーのぱくもぐブログ兼ポートフォリオサイトです。これまでのHTML、CSS、javascriptの経験・実績、日々の暮らしなどを紹介します。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://pakumogu.xyz/assets/img/ogp/ogp.png',
      },
      { hid: 'og:locale', content: 'ja_jp' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@ぱくもぐブログ' },
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
    trailingSlash: false,
    middleware: 'redirect',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'articles',
        path: '/articles/:slug',
        component: resolve(__dirname, 'pages/index.vue'),
      })
    },
    // base: '/nuxt-static-sample/', //元の記述
    // extendRoutes(routes, resolve) {//ページが存在しない場合のリダイレクトの設定
    //   routes.push({
    //     name: 'notfound',
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
    // { src: '~/plugins/gtag.js', mode: 'client' },
    '~plugins/vue-scrollto',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios', '@nuxtjs/sitemap', '@nuxtjs/google-analytics'],
  googleAnalytics: {
    id: GA_ID_UA,
    // checkDuplicatedScript: true
  },
  sitemap: {
    // サイトマップが作成される場所
    path: '/sitemap.xml',
    // サイトのURL
    hostname: 'https://pakumogu.xyz',
    // サイトマップの更新頻度（ms）
    cacheTime: 1000 * 60 * 60 * 24,
    trailingSlash: false, // 追加
    // generate: true,
    routes(callback) {
      axios
        .get(API_URL + '/blog', {
          headers: { 'X-API-KEY': API_KEY },
        })
        .then((response) => {
          const articles = response.data
          // console.log('articles:', articles)
          const routes = articles.contents.map((article) => {
            // console.log('articleaaaaaaaaa:', article)
            return 'articles/article/' + article.id
          })
          callback(null, routes)
        })
        .catch(callback)
    },
  },
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
    gaIdUa: process.env.NODE_ENV !== 'production' ? GA_ID_UA : undefined,
    gaIdG: process.env.NODE_ENV !== 'production' ? GA_ID_G : undefined,
  },
  privateRuntimeConfig: {
    apiKey: API_KEY,
    gaIdUa: GA_ID_UA,
    gaIdG: GA_ID_G,
  },
}
