<template>
  <div class="l-card">
    <div class="m-card-thumb">
      <nuxt-link :to="'/article/' + articleId"
        ><img src="~@/assets/img/article/thumb/thumb_01.jpg" alt=""
      /></nuxt-link>
    </div>
    <div class="l-card-body">
      <card-date :up-date-boolean="articleDate !== articleDateUpDate">
        <template #date>
          {{ articleDate | formatDate }}
        </template>
        <template #upDate>
          {{ articleDateUpDate | formatDate }}
        </template>
      </card-date>
      <heading-2 data-type="cardttl">
        <nuxt-link :to="'/article/' + articleId" class="m-card-ttl">{{
          articleTitle
        }}</nuxt-link>
      </heading-2>
      <!-- eslint-disable-next-line vue/no-v-html-->
      <div class="m-card-txt" v-html="articleBody"></div>
      <card-btn :to="'/article/' + articleId" data-width="small"
        >この記事を読む</card-btn
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
    articleTitle: {
      type: String,
      required: true,
    },
    articleBody: {
      type: String,
      required: true,
    },
    articleDate: {
      type: String,
      required: true,
    },
    articleDateUpDate: {
      type: String,
      required: true,
    },
    articleId: {
      type: String,
      required: true,
    },
  },
}
</script>
