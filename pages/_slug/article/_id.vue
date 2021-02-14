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
                  <card-detail
                    :current-article="currentArticle"
                    :parse-article-data="cmsData"
                    btn-txt="記事一覧に戻る"
                  ></card-detail>
                  <!-- <div v-html="cmsData"></div> -->
                </li>
              </ul>
            </div>
          </div>
          <!-- ./l-section-inner -->
        </section>
        <!-- ./l-section -->
        <div class="l-side">
          <the-side-profile>
            <p class="m-box-txt">
              沖縄で活動するマークアップエンジニアです。<br />HTML/CSS/javaScriptに関することや、日常をこのブログで発信していきいます！
            </p>
          </the-side-profile>
          <the-side-latest>
            <the-side-latest-items
              v-for="(latestArticle, key) in latestArticles"
              :key="key"
              :latest-article="latestArticle"
            ></the-side-latest-items>
          </the-side-latest>
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
import hljs from 'highlight.js'
import 'highlight.js/styles/arta.css'

export default {
  async asyncData({ $config, params, error }) {
    try {
      const { data } = await axios.get(
        // 記事データ
        `${$config.apiUrl}/blog/${params.id}`,
        {
          headers: { 'X-API-KEY': $config.apiKey },
        }
      )
      // 最新記事表示のためのデータ
      const artcleLatest = await axios.get(
        // 最新記事データ
        `${$config.apiUrl}/blog?limit=3`,

        {
          headers: { 'X-API-KEY': $config.apiKey },
        }
      )
      // 記事データにモジュールクラスをつける処理
      const blogTxt = data.body
      const latestData = artcleLatest.data.contents
      let result = ''
      const cmsDataArray = []

      // console.log('params.id:', params.id)
      blogTxt.forEach((elem, index) => {
        // リッチエディタで入稿の場合HTMLをパースし配列に格納する
        if (elem.fieldId === 'rich') {
          const $ = cheerio.load(elem.rich)
          // 複数のリストタグをm-list-bodyを入れる処理
          $('li').each(function (listIndex, listElem) {
            $(this).html(
              '<span class="m-list-body">' + $(this).text() + '</span>'
            )
          })
          $('h2').attr('data-type', 'article').addClass('m-heading-2')
          $('h3').attr('data-type', 'article').addClass('m-heading-3')
          $('p').each((ParagraphIndex, ParagraphElem) => {
            if ($(ParagraphElem).html().includes('<img')) {
              const img = $(ParagraphElem).find('img')
              $(ParagraphElem).find('img').remove()
              $(ParagraphElem).before('<p class="m-txt m-ac">' + img + '</p>')
            }
          })
          $('p').addClass('m-txt')
          $('ul').addClass('m-list').attr('data-font', 'middle')
          $('li').prepend('<span class="m-list-icon">・</span>')
          $('a').attr('data-icon', 'blank').addClass('m-link')
          $('blockquote').addClass('m-blockquote')
          $('pre code').each((_, elm) => {
            const codeHeighLight = hljs.highlightAuto($(elm).text())
            $(elm).html(codeHeighLight.value)
            $(elm).addClass('hljs m-code js')
          })
          result = $('body').html()
          cmsDataArray.push(result)
          // HTMLで入稿の場合、そのまま配列に格納する
        } else {
          cmsDataArray.push(elem.html)
        }
      })

      // 最新記事データを最初のテキストのみに整形
      latestData.forEach((element, index) => {
        const $ = cheerio.load(element.body[0].rich)
        element.body[0].rich = $('p').html()
      })

      return {
        latestArticles: latestData,
        currentArticle: data,
        parseArticleData: result,
        cmsData: cmsDataArray.join('\n'),
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
