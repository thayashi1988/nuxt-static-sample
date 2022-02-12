<template>
  <div>
    <the-main :title="breakHeading" sub-title="" :sub-title-show="false">
      <div class="l-underlayer">
        <article class="l-section" data-bg="gray" itemscope itemtype="https://schema.org/BlogPosting">
          <div class="l-section-inner">
            <div class="l-grid-container">
              <ul class="l-grid-row">
                <li class="l-grid-col" data-col="12" data-col-sp="12" data-marginp="true">
                  <card-detail
                    :current-article="currentArticle"
                    :parse-article-data="cmsData"
                    :article-toc="tocData"
                    :prams-id="pageId"
                    btn-txt="記事一覧に戻る"
                  ></card-detail>
                </li>
              </ul>
            </div>
            <div class="l-sns">
              <TextNormal cls="m-bold m-sns-title">記事をシェアする</TextNormal>
              <div class="l-sns-inner">
                <Twitter />
                <Facebook />
              </div>
            </div>
            <the-articles
              :prev-show-flag="prevFlag"
              :prev-object="articleNextPrev[0]"
              :next-show-flag="nextFlag"
              :next-object="articleNextPrev[1]"
            />
          </div>
          <!-- ./l-section-inner -->
        </article>
        <!-- ./l-section -->
        <aside class="l-side">
          <the-side-profile>
            <p class="m-box-txt">
              沖縄で活動するマークアップエンジニアです。<br />HTML/CSS/javaScriptに関することや、日常をこのぱくもぐブログで発信していきいます！
            </p>
          </the-side-profile>
          <the-side-latest>
            <the-side-latest-items
              v-for="(latestArticle, key) in latestArticles"
              :key="key"
              :latest-article="latestArticle"
            ></the-side-latest-items>
            <li>
              <link-arrow href="/" cls="m-mb-0">記事一覧へ戻る</link-arrow>
            </li>
          </the-side-latest>
          <div class="l-box">
            <div class="l-box-inner">
              <p class="m-box-ttl">カテゴリ一覧</p>
              <ul class="m-list-category">
                <li v-for="data in categoryDatas" :key="data.category">
                  <span class="m-label">
                    <nuxt-link :to="`/categorys/category/${data.encode === '' ? data.category : data.encode}`">
                      {{ data.category }}&nbsp;（{{ data.count }}件）</nuxt-link
                    >
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <!-- ./l-box -->
        </aside>
        <!-- ./l-side -->
      </div>
      <!-- ./l-underlayer -->
    </the-main>
    <the-bread-crumb :bread-crumb-title="heading"></the-bread-crumb>
  </div>
</template>
<script>
import axios from 'axios'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css'

export default {
  async asyncData({ $config, params, error }) {
    try {
      // 一旦100件の記事を取得
      const getData = await axios.get(`${$config.apiUrl}/blog/?limit=100`, {
        headers: { 'X-API-KEY': $config.apiKey },
      })
      const allArticelsData = getData.data.contents

      // カテゴリーだけを取得
      const allCategoryData = await axios.get(`${$config.apiUrl}/blog/?limit=100&fields=category`, {
        headers: { 'X-API-KEY': $config.apiKey },
      })

      // カテゴリ一覧の連想配列を生成
      const categoryArrayInObj = allCategoryData.data.contents

      // カテゴリ一覧の連想配列からカテゴリーだけの配列に修正
      const categoryArray = []
      categoryArrayInObj.forEach((elem) => {
        categoryArray.push(elem.category[0])
      })
      // categoryArrayで重複している分を削除し配列にする
      const categoryDuplicateDelete = [...new Set(categoryArray)]

      // 各カテゴリが何件あるかを判定し、カテゴリと件数のオブジェクトにする
      const categoryDatas = []
      const checkJapanese = new RegExp(/^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/)
      categoryDuplicateDelete.forEach((elem) => {
        const count = categoryArray.filter((elemFilter) => {
          return elemFilter === elem
        }).length
        if (elem.match(checkJapanese)) {
          const encode = encodeURI(elem)
          categoryDatas.push({ category: elem, categoryLower: elem.toLowerCase(), count, encode })
        } else {
          categoryDatas.push({ category: elem, categoryLower: elem.toLowerCase(), count, encode: '' })
        }
      })

      // アクセスしたページと同じ記事を抽出
      const currentArticleData = allArticelsData.find((id) => {
        return id.id === params.id
      })

      // 最新記事の3件抽出
      const latestArticleData = allArticelsData.slice(0, 3)

      // 記事データにモジュールクラスをつける処理
      const blogTxt = currentArticleData.body
      let result = ''
      const cmsDataArray = []
      let toc = []

      blogTxt.forEach((elem) => {
        // リッチエディタで入稿の場合HTMLをパースし配列に格納する
        if (elem.fieldId === 'rich') {
          const $ = cheerio.load(elem.rich)
          // 複数のリストタグをm-list-bodyを入れる処理
          $('li').each(function () {
            $(this).html('<span class="m-list-body">' + $(this).text() + '</span>')
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
          $('ul').addClass('m-list').attr('data-font', 'large')
          $('li').prepend('<span class="m-list-icon">・</span>')
          $('a').attr('data-icon', 'blank').addClass('m-link')
          $('blockquote').addClass('m-blockquote')
          $('pre code').each((_, elm) => {
            const codeHeighLight = hljs.highlightAuto($(elm).text())
            $(elm).html(codeHeighLight.value)
            $(elm).addClass('hljs m-code')
          })

          // 目次生成処理
          const headings = $('h1, h2, h3').toArray()
          const tocArray = headings.map((data) => ({
            text: data.children[0].data,
            id: data.attribs.id,
            name: data.name,
          }))
          // rich、テキストどちらの入稿もconcatで一つの配列にする。
          toc = toc.concat(tocArray)

          result = $('body').html()
          cmsDataArray.push(result)
          // HTMLで入稿の場合、そのまま配列に格納する
        } else {
          cmsDataArray.push(elem.html)
        }
      })

      // 最新記事データを最初のテキストのみに整形
      latestArticleData.forEach((element, index) => {
        const $ = cheerio.load(element.body[0].rich)
        element.body[0].rich = $('p').html()
      })

      // 次の記事、前の記事処理
      const articleNextPrevData = allArticelsData
      const articleNextPrevDataArray = []
      let articleNextFlag = true // 次の記事が一つの場合のフラグ
      let articlePrevFlag = true // 前の記事が一つの場合のフラグ

      const insertDummyData = (nextPrevFlag) => {
        articleNextPrevDataArray.push({
          id: '',
          thumbImg: { url: '' },
          title: '',
        })
        if (nextPrevFlag === 'prev') {
          articlePrevFlag = false
        } else {
          articleNextFlag = false
        }
      }

      articleNextPrevData.forEach((e, i) => {
        if (e.id === params.id) {
          // 現在の記事より、最新記事があるかの判定
          if (typeof articleNextPrevData[i - 1] !== 'undefined') {
            articleNextPrevDataArray.push(articleNextPrevData[i - 1])
          } else {
            insertDummyData('prev')
          }

          // 現在の記事より、過去記事があるかの判定
          if (typeof articleNextPrevData[i + 1] !== 'undefined') {
            articleNextPrevDataArray.push(articleNextPrevData[i + 1])
          } else {
            insertDummyData('next')
          }
        }
      })

      return {
        latestArticles: latestArticleData,
        currentArticle: currentArticleData,
        parseArticleData: result,
        cmsData: cmsDataArray.join('\n'),
        articleNextPrev: articleNextPrevDataArray,
        nextFlag: articleNextFlag,
        prevFlag: articlePrevFlag,
        tocData: toc,
        pageId: params.id,
        categoryDatas,
      }
    } catch (err) {
      error({
        erroeCode: 404,
      })
    }
  },
  computed: {
    heading() {
      return this.$myInjectedFunction(this.currentArticle.title, 'bread')
    },
    breakHeading() {
      return this.$myInjectedFunction(this.currentArticle.title, 'heading1')
    },
  },

  head() {
    return {
      title: `${this.heading}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `沖縄在住Webコーダーのぱくもぐブログ兼ポートフォリオサイト、${this.heading}ページです。これまでのHTML、CSS、javascriptの経験・実績、日々の暮らしなどを紹介します。`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `沖縄在住Webコーダーのぱくもぐブログ兼ポートフォリオサイト、${this.heading}ページです。これまでのHTML、CSS、javascriptの経験・実績、日々の暮らしなどを紹介します。`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.heading}`,
        },
      ],
      script: [
        {
          src: 'https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v10.0',
          async: true,
          defer: true,
          crossorigin: 'anonymous',
          nonce: 'jc7OTse8',
        },
        { src: 'https://platform.twitter.com/widgets.js', async: true, charset: 'utf-8' },
      ],
    }
  },
}
</script>
