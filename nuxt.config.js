const { API_KEY, API_URL, GA_ID_UA, GA_ID_G } = process.env
import axios from 'axios'
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
      return (title ? `${title} | ` : '') + 'ぱくもぐブログ'
    },
    title: 'ぱくもぐブログ' || '',
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
        content: 'ぱくもぐブログ',
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: 'https://nervous-franklin-aa026b.netlify.app/' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: process.env.npm_package_name || '',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '沖縄在住のWebコーダーのブログ、ポートフォリオサイトの${title}のトップページです。今までのHTML、CSS、javascriptの経験や実績を紹介します。',
      },
      { hid: 'og:image', property: 'og:image', content: 'https://nervous-franklin-aa026b.netlify.app/assets/img/ogp/ogp.png' },
      { hid: 'og:locale', content: 'ja_jp' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@ぱくもぐ' },
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
    '@nuxtjs/google-gtag'
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/google-gtag',
    '@nuxtjs/sitemap',
  ],
  'google-gtag': {
    id: GA_ID_G,  //サイトのID
    debug: true,  // 開発環境でも表示したい場合
  },
  sitemap: {
    // サイトマップが作成される場所
    path: '/sitemap.xml',
    // サイトのURL
    hostname: 'https://nervous-franklin-aa026b.netlify.app/',
    // サイトマップの更新頻度（ms）
    cacheTime: 1000 * 60 * 60 * 24,
    routes (callback) {
      axios.get(API_URL + '/information', {
        headers: { 'X-API-KEY': API_KEY },
      })
      .then((response) => {
        const articles = response.data
        // console.log('articles:', articles)
        const routes = articles.contents.map((article) => {
          // console.log('articleaaaaaaaaa:', article)
          return article.id
        })
        callback(null, routes)
      })
      .catch(callback)
    }
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
    gaIdG: process.env.NODE_ENV !== 'production' ? GA_ID_G : undefined
  },
  privateRuntimeConfig: {
    apiKey: API_KEY,
    gaIdUa: GA_ID_UA,
    gaIdG: GA_ID_G
  },
}
