<template>
  <div>
    <the-main :title="heading1" sub-title="WEB技術や日常などを発信しています">
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
                <card
                  :article-title="article.title"
                  :article-date="article.date"
                  :article-date-up-date="article.updatedAt"
                  :article-id="article.id"
                  :article-body="article.body"
                ></card>
              </li>
            </ul>
          </div>
        </div>
        <ul style="width: 70%; margin: 0 auto; display: flex">
          <li
            v-for="(pages, key) in articleLen"
            :key="key"
            style="margin-right: 10px"
          >
            <nuxt-link v-if="pages === 1" to="/">{{ pages }}</nuxt-link>
            <span v-else-if="pages === pageNum">{{ pages }}</span>
            <nuxt-link v-else :to="`/${pages}`">{{ pages }}</nuxt-link>
          </li>
        </ul>
        <!-- ./l-section-inner -->
      </section>
      <!-- ./l-section -->
    </the-main>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import cheerio from 'cheerio'

const title = 'ぱくもぐブログのぺージャー'

export default {
  async asyncData({ route, $config, error }) {
    const pageNumber = parseInt(route.params.slug)
    console.log('pageNumber:', pageNumber)
    const { data } = await axios.get(`${$config.apiUrl}/information`, {
      headers: { 'X-API-KEY': $config.apiKey },
    })
    // 表示件数処理
    const totalPages = data.totalCount
    const showPages = 3
    const maxPages = Math.ceil(totalPages / showPages)
    const currentPages = route.params.pageid // 2,3,4
    const num = showPages
    // if (currentPages >= 3) {
    //   num = showPages * currentPages
    //   if (totalPages - num <= 0) {
    //     num = num - totalPages - 1
    //   }
    // }
    console.log('num:', num)
    const limtArticles = []
    // 記事データを最初のテキストのみに整形
    data.contents.forEach((element, index) => {
      const $ = cheerio.load(element.body)
      element.body = $('p').html()
      if (index <= totalPages - showPages - currentPages) {
        // 7-3-2
        // 取り出す記事数
        limtArticles.push(data.contents[showPages - 1 + index])
        if (
          typeof data.contents[showPages * (currentPages - 1) + index] !==
          'undefined'
        ) {
          limtArticles.push(
            data.contents[showPages * (currentPages - 1) + index]
          ) // 取り出す記事データ
        }
      }
    })
    console.log('limtArticles:', limtArticles)
    return {
      articleItems: limtArticles,
      articleLen: Math.ceil(totalPages / showPages),
      pageNum: pageNumber,
    }
  },
  computed: {
    heading1() {
      return title
    },
  },
  head() {
    return {
      title: `${title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `沖縄在住のWebコーダーのブログ、ポートフォリオサイトの${title}のトップページです。今までのHTML、CSS、javascriptの経験や実績を紹介します。`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `沖縄在住のWebコーダーのブログ、ポートフォリオサイトの${title}のトップページです。今までのHTML、CSS、javascriptの経験や実績を紹介します。`,
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${title}`,
        },
      ],
    }
  },
}
</script>
