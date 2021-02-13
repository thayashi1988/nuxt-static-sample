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
                    :parse-article-data="parseArticleData"
                    btn-txt="記事一覧に戻る"
                  ></card-detail>
                  <!-- <p v-html="test"></p> -->
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
        `${$config.apiUrl}/information/${params.id}`,
        {
          headers: { 'X-API-KEY': $config.apiKey },
        }
      )
      const info = await axios.get(
        // 最新記事データ
        `${$config.apiUrl}/information?limit=3`,

        {
          headers: { 'X-API-KEY': $config.apiKey },
        }
      )
      // 記事データにモジュールクラスをつける処理
      // console.log('data:', data)
      const $ = cheerio.load(data.body)
      // 複数のリストタグをm-list-bodyを入れる処理
      $('li').each(function (listIndex, listElem) {
        $(this).html('<span class="m-list-body">' + $(this).text() + '</span>')
      })
      $('h2').attr('data-type', 'article').addClass('m-heading-2')
      $('h3').attr('data-type', 'article').addClass('m-heading-3')
      // 画像が挿入された場合、前後の文章内のpタグに入るため、画像だけ一つのpタグに入れる処理
      // $('p').each(function (listIndex, listElem) {
      // console.log(`$(this):${listIndex}`, $(this).html())
      // })
      // console.log('$("p").html():', $('p').html())
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
        const result = hljs.highlightAuto($(elm).text())
        $(elm).html(result.value)
        $(elm).addClass('hljs m-code js')
      })
      const result = $('body').html()

      // 最新記事データを最初のテキストのみに整形
      info.data.contents.forEach((element, index) => {
        const $ = cheerio.load(element.body)
        element.body = $('p').html()
      })
      const testArray = []
      data.content.forEach((elem, index) => {
        if (elem.html) {
          testArray.push(elem.html)
        } else {
          testArray.push(elem.richEdit)
        }
      })
      console.log('testArray:', testArray)
      return {
        latestArticles: info.data.contents,
        currentArticle: data,
        parseArticleData: result,
        test: testArray,
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
