<template>
  <div class="l-card">
    <!-- <div class="m-card-thumb">
      <img
        src="~@/assets/img/article/thumb/thumb_01.jpg"
        alt=""
      />
    </div> -->
    <div class="l-card-body">
      <heading-2 class="m-mt-0" data-type="article">
        {{ currentArticle.title }}
      </heading-2>
      <card-date
        :up-date-boolean="currentArticle.date !== currentArticle.updatedAt"
      >
        <template #date>
          {{ currentArticle.date | formatDate }}
        </template>
        <template #upDate>
          {{ currentArticle.updatedAt | formatDate }}
        </template>
      </card-date>
      <!-- eslint-disable-next-line vue/no-v-html-->
      <div class="m-card-html" v-html="parseArticleData"></div>
      <card-btn class="" to="/" data-width="middle">{{ btnTxt }}</card-btn>
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
      tyoe: Object,
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
