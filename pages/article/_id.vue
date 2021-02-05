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
                        {{ articles.title }}
                      </heading-2>
                      <card-date
                        :up-date-boolean="articles.date !== articles.updatedAt"
                      >
                        <template #date>
                          {{ articles.date | formatDate }}
                        </template>
                        <template #upDate>
                          {{ articles.updatedAt | formatDate }}
                        </template>
                      </card-date>
                      <!-- eslint-disable-next-line vue/no-v-html-->
                      <div v-html="articles.body"></div>
                      <!-- <h3 class="m-heading-3" data-type="article">
                        あああああああああああああああああああ
                      </h3>
                      <p class="m-card-txt">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Molestias aliquam quos quisquam voluptatibus vero
                        facere fuga voluptates amet autem. Omnis doloribus autem
                        nemo. Dolorem et vitae accusantium nihil, quae ut?
                      </p> -->
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
              <p class="m-box-txt">
                <span class="m-box-label">管理人：じぃ</span><br />
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
      console.log('info:', info.data.contents[6])
      return {
        latestArticles: info.data.contents,
        articles: data,
      }
    } catch (err) {
      error({
        erroeCode: 404,
      })
    }
  },
  computed: {
    heading1() {
      return this.articles.title
    },
  },
  head() {
    return {
      title: `${this.articles.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `沖縄在住のWebコーダーのブログ、ポートフォリオサイトの${this.articles.title}ページです。HTML、CSS、javascriptのスキル、経験、実績を紹介します。`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `沖縄在住のWebコーダーのブログ、ポートフォリオサイトの${this.articles.title}ページです。HTML、CSS、javascriptのスキル、経験、実績を紹介します。`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.articles.title}`,
        },
      ],
    }
  },
}
</script>
