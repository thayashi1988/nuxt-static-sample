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
        <nuxt-link :to="articleData.id" class="m-card-ttl">{{
          articleData.title
        }}</nuxt-link>
      </heading-2>
      <!-- eslint-disable-next-line vue/no-v-html-->
      <div class="m-card-txt" v-html="articleData.body"></div>
      <card-btn
        :to="`/articles/article/${articleData.id}`"
        data-width="small"
        >{{ btnTxt }}</card-btn
      >
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
}
</script>
