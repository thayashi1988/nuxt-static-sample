<template>
  <div>
    <the-main :title="breakHeading" :sub-title-show="false">
      <section class="l-section">
        <div class="l-section-inner">
          <div class="l-grid-container">
            <ul class="l-grid-row">
              <li
                v-for="(article, key) in categoryArticleItems"
                :key="key"
                class="l-grid-col"
                data-col="4"
                data-col-sp="12"
                data-marginp="true"
                data-padding="true"
                data-padding-sp="false"
              >
                <card :article-data="article" btn-txt="記事を見る"></card>
              </li>
            </ul>
          </div>
          <BtnBase to="/" data-width="middle">記事一覧ページへ戻る</BtnBase>
        </div>
        <!-- ./l-section-inner -->
      </section>
      <!-- ./l-section -->
    </the-main>
  </div>
</template>

<script>
import axios from 'axios'
import cheerio from 'cheerio'

export default {
  async asyncData({ params, $config, error }) {
    try {
      // URLのカテゴリ名を取得
      const pageCategoryParam = params.category
      console.log('pageCategoryParam:', pageCategoryParam)
      const searchCount = 50

      const queryParams = {
        limit: searchCount, // 記事取得件数
        filters: `category[contains]${pageCategoryParam}`, // カテゴリ名で検索
      }

      // アクセスしているカテゴリーだけを取得
      const { data } = await axios.get(`${$config.apiUrl}/blog`, {
        params: queryParams,
        headers: { 'X-API-KEY': $config.apiKey },
      })
      const categoryCount = data.totalCount // 該当カテゴリの件数
      const categoryArticleDatas = data.contents // 該当カテゴリだけのデータ

      const categoryArticleArray = []
      // 記事データを最初のテキストのみに整形し配列に格納
      categoryArticleDatas.forEach((element) => {
        const $ = cheerio.load(element.body[0].rich)
        if (element.thumb) {
          const eyeCatchImg = element.thumbImg.url
          element.eyecatch = eyeCatchImg
        } else {
          element.eyecatch = require(`@/assets/img/article/thumb/thumb_01.jpg`)
        }
        element.body = $('p').html()
        categoryArticleArray.push(element)
      })
      return {
        categoryArticleItems: categoryArticleArray,
        pageCategoryParam,
        categoryCount,
      }
    } catch (err) {
      alert('通信エラーです。ページをリロードしてください。')
      console.log('err:', err.message)
      error({
        erroeCode: 404,
      })
    }
  },
  computed: {
    categoryHeading() {
      return `カテゴリ一覧 ${this.pageCategoryParam} （全${this.categoryCount}件）`
    },
    breakHeading() {
      return `カテゴリ一覧<br>${this.pageCategoryParam} （全${this.categoryCount}件）`
    },
  },
  head() {
    return {
      title: `${this.categoryHeading}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `沖縄在住Webコーダーのぱくもぐブログ兼ポートフォリオサイト、${this.categoryHeading}のカテゴリ一覧です。これまでのHTML、CSS、javascriptの経験・実績、日々の暮らしなどを紹介します。`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `沖縄在住Webコーダーのぱくもぐブログ兼ポートフォリオサイト、${this.categoryHeading}のカテゴリ一覧です。これまでのHTML、CSS、javascriptの経験・実績、日々の暮らしなどを紹介します。`,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.categoryHeading}`,
        },
      ],
    }
  },
}
</script>
