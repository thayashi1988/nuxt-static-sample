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
                      <h2 class="m-heading-2" data-type="article">
                        {{ articles.title }}
                      </h2>
                      <p class="m-card-type">
                        <span class="m-card-date">{{
                          articles.date | formatDate
                        }}</span>
                        <!-- <span class="m-label"><a href="#">ラベル</a></span> -->
                      </p>
                      <!-- eslint-disable-next-line vue/no-v-html-->
                      <div class="m-card-txt" v-html="articles.body">
                        <!-- {{ articles.body }} -->
                      </div>
                      <h3 class="m-heading-3" data-type="article">
                        あああああああああああああああああああ
                      </h3>
                      <p class="m-card-txt">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Molestias aliquam quos quisquam voluptatibus vero
                        facere fuga voluptates amet autem. Omnis doloribus autem
                        nemo. Dolorem et vitae accusantium nihil, quae ut?
                      </p>
                      <p class="m-ac">
                        <nuxt-link to="/" class="m-btn m-card-btn"
                          >記事一覧へ</nuxt-link
                        >
                      </p>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, voluptas quasi! Saepe fugit consectetur, odit
                dignissimos, inventore, repellendus autem ipsa expedita hic
                soluta commodi vero officia recusandae velit quidem corrupti.
              </p>
            </div>
          </div>
          <!-- ./l-box -->
          <div class="l-box">
            <div class="l-box-inner">
              <p class="m-box-ttl">最新記事</p>
              <!-- <ul class="m-box-list">
                <li>
                  <dl>
                    <dt><span class="m-date">2020/07/22</span></dt>
                    <dd><a href="#">intorduce</a></dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt><span class="m-date">2020/07/22</span></dt>
                    <dd><a href="#">intorduce</a></dd>
                  </dl>
                </li>
              </ul> -->
            </div>
          </div>
          <!-- ./l-box -->
          <div class="l-box">
            <div class="l-box-inner">
              <p class="m-box-ttl">カテゴリー</p>
              <!-- <p>
                <span class="m-label"><a href="#">ラベルラベル</a></span
                ><span class="m-label"
                  ><a href="#">ラベルラベルラベルラベル</a></span
                >
              </p> -->
            </div>
          </div>
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
      return {
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
      title: this.articles.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${this.articles.title}の説明ページです。`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${this.articles.title}の説明ページです。`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.articles.title} | github-nuxt-static-sample`,
        },
      ],
    }
  },
}
</script>
