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
              >
                <card
                  :article-title="article.title"
                  :article-date="article.date"
                  :article-id="article.id"
                  :article-body="article.body"
                ></card>
              </li>
            </ul>
          </div>
        </div>
        <!-- ./l-section-inner -->
      </section>
      <!-- ./l-section -->
    </the-main>
    <!-- <the-bread-crumb></the-bread-crumb> -->
  </div>
</template>

<script>
import axios from 'axios'
const title = 'ぱくもぐブログ'

export default {
  async asyncData({ $config, error }) {
    const { data } = await axios.get(`${$config.apiUrl}/information`, {
      headers: { 'X-API-KEY': $config.apiKey },
    })
    return {
      articleItems: data.contents,
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
          content: `${title}のトップページです。`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${title}のトップページです。`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${title} | github-nuxt-static-sample`,
        },
      ],
    }
  },
}
</script>
