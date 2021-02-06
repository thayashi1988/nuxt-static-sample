<template>
  <div>
    <the-main :title="heading1" sub-title="">
      <div class="l-underlayer">
        <section class="l-section" data-bg="gray">
          <div class="l-section-inner">
            <div class="l-grid-container">
              <ul class="l-grid-row">
                <li
                  class="l-grid-col"
                  data-col="12"
                  data-col-sp="12"
                  data-marginp="true"
                >
                  <div class="l-card">
                    <!-- <div class="m-card-thumb">
                      <img
                        src="~@/assets/img/article/thumb/thumb_01.jpg"
                        alt=""
                      />
                    </div> -->
                    <div class="l-card-body">
                      <heading-2 data-type="article">
                        {{ currentArticle.title }}
                      </heading-2>
                      <card-date
                        :up-date-boolean="
                          currentArticle.date !== currentArticle.updatedAt
                        "
                      >
                        <template #date>
                          {{ currentArticle.date | formatDate }}
                        </template>
                        <template #upDate>
                          {{ currentArticle.updatedAt | formatDate }}
                        </template>
                      </card-date>
                      <!-- eslint-disable-next-line vue/no-v-html-->
                      <div class="m-card-html" v-html="parseArticleData"></div>
                      <!-- eslint-disable-next-line vue/no-v-html-->
                      <card-btn class="" to="/" data-width="middle"
                        >記事一覧へ</card-btn
                      >
                    </div>
                    <!-- ./l-card-body -->
                  </div>
                  <!-- ./l-card -->
                </li>
              </ul>
            </div>
          </div>
          <!-- ./l-section-inner -->
        </section>
        <!-- ./l-section -->
        <div class="l-side">
          <div class="l-box">
            <div class="l-box-inner">
              <p class="m-box-ttl">プロフィール</p>
              <div class="m-box-profile">
                <p class="m-box-label">管理人：じぃ</p>
                <img src="~/assets/img/icon/icon.png" alt="" />
              </div>
              <p class="m-box-txt">
                沖縄で活動するマークアップエンジニアです。<br />HTML/CSS/javaScriptに関することや、日常をこのブログで発信していきいます！
              </p>
            </div>
          </div>
          <!-- ./l-box -->
          <div class="l-box">
            <div class="l-box-inner">
              <p class="m-box-ttl">最新記事</p>
              <ul class="m-box-list">
                <li v-for="(latestArticle, key) in latestArticles" :key="key">
                  <dl>
                    <dt>
                      <span class="m-date">{{
                        latestArticle.date | formatDate
                      }}</span>
                    </dt>
                    <dd>
                      <!-- eslint-disable-next-line vue/no-v-html-->
                      <nuxt-link
                        :to="latestArticle.id"
                        v-html="latestArticle.body"
                      ></nuxt-link>
                    </dd>
                  </dl>
                </li>
              </ul>
            </div>
          </div>
          <!-- ./l-box -->
          <!-- <div class="l-box">
            <div class="l-box-inner">
              <p class="m-box-ttl">カテゴリー</p>
              <p>
                <span class="m-label"><a href="#">ラベルラベル</a></span
                ><span class="m-label"
                  ><a href="#">ラベルラベルラベルラベル</a></span
                >
              </p>
            </div>
          </div> -->
          <!-- ./l-box -->
        </div>
        <!-- ./l-side -->
      </div>
      <!-- ./l-underlayer -->
    </the-main>
    <the-bread-crumb :bread-crumb-title="heading1"></the-bread-crumb>
  </div>
</template>
<script>
import axios from 'axios'
import cheerio from 'cheerio'

export default {
  async asyncData({ $config, params, error }) {
    try {
      const { data } = await axios.get(
        `${$config.apiUrl}/information/${params.id}`,
        {
          headers: { 'X-API-KEY': $config.apiKey },
        }
      )
      const info = await axios.get(
        `${$config.apiUrl}/information?limit=3`,

        {
          headers: { 'X-API-KEY': $config.apiKey },
        }
      )
      const $ = cheerio.load(data.body)
      const listText = $('li').html()
      $('h2').attr('data-type', 'article').addClass('m-heading-2')
      $('h3').attr('data-type', 'article').addClass('m-heading-3')
      $('p').each((index, elem) => {
        if ($(elem).html().includes('<img')) {
          const img = $(elem).find('img')
          $(elem).find('img').remove()
          $(elem).after('<p class="m-txt">' + img + '</p>')
        }
      })
      $('p').addClass('m-txt')

      $('ul').addClass('m-list').attr('data-font', 'middle')
      $('li').html('<span class="m-list-body">' + listText + '</span>')
      $('li').prepend('<span class="m-list-icon">・</span>')
      $('a').attr('data-icon', 'blank').addClass('m-link')
      $('blockquote').addClass('m-blockquote')
      const result = $('body').html()
      return {
        latestArticles: info.data.contents,
        currentArticle: data,
        parseArticleData: result,
      }
    } catch (err) {
      error({
        erroeCode: 404,
      })
    }
  },
  computed: {
    heading1() {
      return this.currentArticle.title
    },
  },
  head() {
    return {
      title: `${this.currentArticle.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `沖縄在住のWebコーダーのブログ、ポートフォリオサイトの${this.currentArticle.title}ページです。HTML、CSS、javascriptのスキル、経験、実績を紹介します。`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `沖縄在住のWebコーダーのブログ、ポートフォリオサイトの${this.currentArticle.title}ページです。HTML、CSS、javascriptのスキル、経験、実績を紹介します。`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.currentArticle.title}`,
        },
      ],
    }
  },
}
</script>
