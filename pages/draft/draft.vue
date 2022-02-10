<template>
  <!-- eslint-disable vue/no-v-html -->
  <div>
    <the-main :title="heading1Preview" sub-title="" :sub-title-show="false">
      <div class="l-underlayer">
        <article class="l-section" data-bg="gray" itemscope itemtype="https://schema.org/BlogPosting">
          <div class="l-section-inner">
            <div class="l-grid-container">
              <ul class="l-grid-row">
                <li class="l-grid-col" data-col="12" data-col-sp="12" data-marginp="true">
                  <!-- <card-detail
                    :current-article="currentArticle"
                    :parse-article-data="cmsData"
                    :article-toc="tocData"
                    :prams-id="previeUrl"
                    btn-txt="記事一覧に戻る"
                  ></card-detail> -->
                  <!-- eslint-disable-next-line vue/no-v-html -->
                  <div class="l-card">
                    <div class="l-card-body" itemprop="articleBody">
                      <!-- eslint-disable-next-line vue/no-v-html -->
                      <h2
                        class="m-heading-2"
                        data-type="article"
                        itemprop="headline"
                        v-html="articleHeadingPreview"
                      ></h2>
                      <!-- eslint-disable-next-line vue/no-v-html -->
                      <div class="m-card-html" v-html="cmsData"></div>
                      <card-btn class="" to="/" data-width="middle">記事一覧に戻る</card-btn>
                    </div>
                  </div>
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
            <!-- <the-articles
              :prev-show-flag="prevFlag"
              :prev-object="articleNextPrev[0]"
              :next-show-flag="nextFlag"
              :next-object="articleNextPrev[1]"
            ></the-articles> -->
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
          <!-- <the-side-latest>
            <the-side-latest-items
              v-for="(latestArticle, key) in latestArticles"
              :key="key"
              :latest-article="latestArticle"
            ></the-side-latest-items>
            <li>
              <link-arrow href="/">記事一覧へ戻る</link-arrow>
            </li>
          </the-side-latest> -->
          <!-- <div class="l-box">
            <div class="l-box-inner">
              <p class="m-box-ttl">カテゴリー</p>
              <p>
                <span class="m-label"><a href="#">ラベルラベル</a></span
                ><span class="m-label"><a href="#">ラベルラベルラベルラベル</a></span>
              </p>
            </div>
          </div> -->
          <!-- ./l-box -->
        </aside>
        <!-- ./l-side -->
      </div>
      <!-- ./l-underlayer -->
    </the-main>
    <!-- <the-bread-crumb :bread-crumb-title="headingPreview"></the-bread-crumb> -->
  </div>
</template>
<script>
import axios from 'axios'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/vs2015.css'

export default {
  data() {
    return {
      currentArticle: {},
      cmsData: '',
      tocData: [],
      previeUrl: '',
      heading1: '',
      articleHeading: '',
      heading: '',
    }
  },
  computed: {
    headingPreview() {
      if (this.heading === '') {
        return 'プレビュー'
      } else {
        let headingTxt = this.heading
        headingTxt = headingTxt.replace(/<br>/g, '')
        return headingTxt
      }
    },
    heading1Preview() {
      if (this.heading1 === '') {
        return 'プレビュー'
      } else {
        let headingTxt = this.heading1
        headingTxt = headingTxt.replace(/<br>/g, '<br>')
        return headingTxt
      }
    },
    articleHeadingPreview() {
      if (this.articleHeading === '') {
        return 'プレビュー'
      } else {
        let headingTxt = this.articleHeading
        headingTxt = headingTxt.replace(/<br>/g, '')
        headingTxt = headingTxt.replace(/】/, '】<br>')
        return headingTxt
      }
    },
  },
  async created() {
    const query = this.$route.query
    // console.log('query:', query)
    if (query.id === undefined || query.draftKey === undefined) {
      return
    }
    // コンテンツID + ドラフトキーでアクセス
    // http://localhost:9000/draft/draft?id=5f5b83g0y&draftKey=68f_OI4mB
    // blog/5f5b83g0y?draftKey=68f_OI4mB
    const getData = await axios.get(`/.netlify/functions/preview?id=${query.id}&draftKey=${query.draftKey}`)
    console.log('getData:', getData)
    const allArticelsData = getData.data

    // 記事データにモジュールクラスをつける処理
    const blogTxt = allArticelsData.body
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

    this.currentArticle = allArticelsData || ''
    this.parseArticleData = result || ''
    this.cmsData = cmsDataArray.join('\n')
    this.tocData = toc || ''
    this.heading = allArticelsData.title || ''
    this.heading1 = allArticelsData.title || ''
    this.articleHeading = allArticelsData.title || ''
  },
  head() {
    return {
      // title: `${this.heading}`,
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' },
        //   {
        //     hid: 'description',
        //     name: 'description',
        //     content: `沖縄在住Webコーダーのぱくもぐブログ兼ポートフォリオサイト、${this.currentArticle.title}ページです。これまでのHTML、CSS、javascriptの経験・実績、日々の暮らしなどを紹介します。`,
        //   },
        //   {
        //     hid: 'og:description',
        //     property: 'og:description',
        //     content: `沖縄在住Webコーダーのぱくもぐブログ兼ポートフォリオサイト、${this.currentArticle.title}ページです。これまでのHTML、CSS、javascriptの経験・実績、日々の暮らしなどを紹介します。`,
        //   },
        //   {
        //     hid: 'og:title',
        //     property: 'og:title',
        //     content: `${this.heading}`,
        //   },
      ],
    }
  },
}
</script>
