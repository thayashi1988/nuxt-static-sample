<template>
  <li class="m-article-links-item" :class="{ 'is-last': nextFlag }">
    <p class="m-article-links-txt-sub">前の記事</p>
    <nuxt-link :to="nextHref" class="m-article-links m-article-links-next">
      <div class="m-article-links-thumb">
        <img :src="nextSrc" :alt="nextTitle" />
      </div>
      <div class="m-article-links-body">
        <h4 class="m-article-links-title">
          {{ nextTitle }}
        </h4>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'TheArticlesNext',
  props: {
    nextHref: {
      type: String,
      default: '',
    },
    nextSrc: {
      type: String,
      default: '',
    },
    nextTitle: {
      type: String,
      default: '',
    },
    nextFlag: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
