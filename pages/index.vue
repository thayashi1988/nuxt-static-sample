<template>
  <div>
    <the-main :title="heading1" sub-title="ぱくもぐブログを通して、WEB技術や日常などを発信しています">
      <section class="l-section">
        <div class="l-section-inner">
          <div class="l-grid-container">
            <ul class="l-grid-row">
              <li
                v-for="(article, key) in articleItems"
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
          <pager>
            <pager-items
              v-for="(pages, key) in articleLen"
              :key="key"
              :pager-num="pagerNum"
              :pages="pages"
              :href="`/articles/${pages}`"
            ></pager-items>
          </pager>
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
    const pageParams = params.slug || '1'
    const articleslimit = 6 // 記事表示件数
    // console.log('pageParams:', pageParams)
    const { data } = await axios.get(
      `${$config.apiUrl}/blog?limit=${articleslimit}&offset=${(pageParams - 1) * articleslimit}`,
      {
        headers: { 'X-API-KEY': $config.apiKey },
      }
    )
    const totalPages = data.totalCount // 記事総数
    const blogDatas = data.contents
    const articlesArray = []
    let eyeCatchImg = ''

    // 記事データを最初のテキストのみに整形し配列に格納
    blogDatas.forEach((element, index) => {
      const $ = cheerio.load(element.body[0].rich)
      // thumbがtrueであればサムネイル画像を表示。そうでなければデフォルトサムネイル
      if (element.thumb) {
        eyeCatchImg = element.thumbImg.url
        element.eyecatch = eyeCatchImg
      } else {
        element.eyecatch = require(`@/assets/img/article/thumb/thumb_01.jpg`)
      }
      element.body = $('p').html()
      articlesArray.push(element)
    })
    return {
      articleItems: articlesArray,
      articleLen: Math.ceil(totalPages / articleslimit),
      pagerNum: parseInt(pageParams),
    }
  },
  data() {
    return {
      heading1: 'ぱくもぐブログ',
    }
  },
  head() {
    return {
      // title: `${this.heading1}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `沖縄在住Webコーダーのぱくもぐブログ兼ポートフォリオサイト、${this.heading1}のトップページです。これまでのHTML、CSS、javascriptの経験・実績、日々の暮らしなどを紹介します。`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `沖縄在住Webコーダーのぱくもぐブログ兼ポートフォリオサイト、${this.heading1}のトップページです。これまでのHTML、CSS、javascriptの経験・実績、日々の暮らしなどを紹介します。`,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.heading1}`,
        },
      ],
    }
  },
}
</script>
