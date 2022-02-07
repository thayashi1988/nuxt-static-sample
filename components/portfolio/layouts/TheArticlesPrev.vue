<template>
  <li class="m-article-links-item" :class="{ 'is-last': prevFlag }">
    <p class="m-article-links-txt-sub">新しい記事</p>
    <nuxt-link :to="prevHref" class="m-article-links m-article-links-prev">
      <div class="m-article-links-thumb">
        <img :src="prevSrc" :alt="prevTitle" />
      </div>
      <div class="m-article-links-body">
        <h4 class="m-article-links-title">
          {{ prevTitle }}
        </h4>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'TheArticlesPrev',
  props: {
    prevHref: {
      type: String,
      default: '',
    },
    prevSrc: {
      type: String,
      default: '',
    },
    prevTitle: {
      type: String,
      default: '',
    },
    prevFlag: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
