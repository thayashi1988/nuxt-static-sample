<template>
  <div>
    <the-main :title="returnHeading" :sub-title-show="false">
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
          <BtnBase to="/" data-width="middle">記事を一覧ページへ戻る</BtnBase>
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
    const searchCount = 50
    // URLのカテゴリ名を取得
    const pageCategoryParams = params.category

    // アクセスしているカテゴリーだけを取得
    const { data } = await axios.get(
      `${$config.apiUrl}/blog/?limit=${searchCount}&filters=category[contains]${pageCategoryParams}`,
      {
        headers: { 'X-API-KEY': $config.apiKey },
      }
    )
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
      pageCategoryParams,
      categoryCount,
    }
  },
  data() {
    return {}
  },
  computed: {
    returnHeading() {
      return `カテゴリ一覧 ${this.pageCategoryParams} （${this.categoryCount}件）`
    },
  },
  head() {
    return {
      title: `${this.returnHeading}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `沖縄在住Webコーダーのぱくもぐブログ兼ポートフォリオサイト、${this.returnHeading}のカテゴリ一覧です。これまでのHTML、CSS、javascriptの経験・実績、日々の暮らしなどを紹介します。`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `沖縄在住Webコーダーのぱくもぐブログ兼ポートフォリオサイト、${this.returnHeading}のカテゴリ一覧です。これまでのHTML、CSS、javascriptの経験・実績、日々の暮らしなどを紹介します。`,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.returnHeading}`,
        },
      ],
    }
  },
}
</script>
