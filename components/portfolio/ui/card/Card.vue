<template>
  <div class="l-card">
    <div class="m-card-thumb">
      <nuxt-link :to="`/articles/article/${articleData.id}`">
        <img :src="articleData.eyecatch" :alt="articleData.title" width="574" height="250" />
      </nuxt-link>
    </div>
    <div class="l-card-body">
      <card-date
        :up-date-boolean="articleData.date !== articleData.updatedAt"
        :attr-publish-date="publishDateFormated"
        :attr-up-date="upDateFormated"
        :tag-show="false"
      >
        <template #date>
          {{ articleData.date | formatDate }}
        </template>
        <template #upDate>
          {{ articleData.updatedAt | formatDate }}
        </template>
      </card-date>
      <heading-2 data-type="cardttl">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <nuxt-link :to="`/articles/article/${articleData.id}`" class="m-card-ttl" v-html="articleHeading"></nuxt-link>
      </heading-2>
      <!-- eslint-disable-next-line vue/no-v-html-->
      <!-- <div class="m-card-txt" v-html="articleData.body"></div> -->
      <card-btn :to="`/articles/article/${articleData.id}`" data-width="small" class="l-card-btn">
        記事を見る
      </card-btn>
    </div>
    <!-- ./l-card-body -->
  </div>
  <!-- ./l-card -->
</template>
<script>
export default {
  name: 'Card',
  props: {
    articleData: {
      type: Object,
      default: () => {},
    },
    parseArticleData: {
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
      return this.$myInjectedFunction(this.articleData.title, 'heading2')
    },
  },
  created() {
    const publishDate = this.articleData.date
    const upDate = this.articleData.updatedAt

    this.publishDateFormated = publishDate.substring(0, publishDate.indexOf('T'))
    this.upDateFormated = upDate.substring(0, upDate.indexOf('T'))
  },
}
</script>
