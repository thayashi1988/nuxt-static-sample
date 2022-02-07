<template>
  <div class="l-card">
    <div class="m-card-thumb">
      <nuxt-link :to="`/articles/article/${articleData.id}`">
        <img :src="articleData.eyecatch" :alt="articleData.title" />
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
      <heading-2 data-type="cardttl" :style="`height: ${heading2MaxHeight}px`">
        <nuxt-link :to="articleData.id" class="m-card-ttl">
          {{ articleData.title }}
        </nuxt-link>
      </heading-2>
      <!-- eslint-disable-next-line vue/no-v-html-->
      <!-- <div class="m-card-txt" v-html="articleData.body"></div> -->
      <card-btn :to="`/articles/article/${articleData.id}`" data-width="small" class="l-card-btn">
        {{ btnTxt }}
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
    btnTxt: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      heading2MaxHeight: 'auto',
      publishDateFormated: '',
      upDateFormated: '',
    }
  },
  created() {
    const publishDate = this.articleData.date
    const upDate = this.articleData.updatedAt

    this.publishDateFormated = publishDate.substring(0, publishDate.indexOf('T'))
    this.upDateFormated = upDate.substring(0, upDate.indexOf('T'))
  },
}
</script>
