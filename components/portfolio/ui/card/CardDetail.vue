<template>
  <div class="l-card">
    <div class="l-card-body" itemprop="articleBody">
      <!-- eslint-disable-next-line -->
      <heading-2 class="m-mt-0" data-type="article" itemprop="headline" v-html="articleHeading" :br="true" />
      <card-date
        :up-date-boolean="currentArticle.date !== currentArticle.updatedAt"
        :tag="currentArticle.category[0]"
        :attr-publish-date="publishDateFormated"
        :attr-up-date="upDateFormated"
      >
        <template #date>
          {{ currentArticle.date | formatDate }}
        </template>
        <template #upDate>
          {{ currentArticle.updatedAt | formatDate }}
        </template>
      </card-date>
      <toc-article>
        <toc-article-item
          v-for="item in articleToc"
          :key="item.id"
          :toc-contents="item"
          :scroll-offset="scrollOffset"
          :page-id="pramsId"
        ></toc-article-item>
      </toc-article>
      <!-- eslint-disable-next-line vue/no-v-html-->
      <div class="m-card-html" v-html="parseArticleData"></div>
      <card-btn to="/" data-width="middle">記事一覧に戻る</card-btn>
    </div>
    <!-- ./l-card-body -->
  </div>
  <!-- ./l-card -->
</template>
<script>
export default {
  name: 'CardDetail',
  props: {
    currentArticle: {
      type: Object,
      default: () => {},
    },
    parseArticleData: {
      type: String,
      default: '',
    },
    articleToc: {
      type: Array,
      default: () => [],
    },
    pramsId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      publishDateFormated: '',
      upDateFormated: '',
    }
  },
  computed: {
    articleHeading() {
      return this.$myInjectedFunction(this.currentArticle.title, 'heading2')
    },
  },
  created() {
    const publishDate = this.currentArticle.date
    const upDate = this.currentArticle.updatedAt
    this.publishDateFormated = publishDate.substring(0, publishDate.indexOf('T'))
    this.upDateFormated = upDate.substring(0, upDate.indexOf('T'))
  },
  methods: {
    scrollOffset() {
      // スムーススクロールの移動を、ヘッダー高さ分を引いて移動する。
      const headerHeight = document.querySelector('.l-header').clientHeight
      const headerOffset = `-${headerHeight}` - `20`
      return parseInt(headerOffset)
    },
  },
}
</script>
