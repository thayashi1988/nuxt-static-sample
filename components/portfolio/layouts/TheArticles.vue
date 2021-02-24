<template>
  <ul class="l-article-links">
    <the-articles-prev
      v-show="prevShowFlag"
      :prev-flag="prevShowFlag"
      :prev-href="prevObject.id"
      :prev-src="prevObject.thumbImg.url"
      :prev-title="prevObject.title"
    ></the-articles-prev>
    <the-articles-next
      v-show="nextShowFlag"
      :next-flag="nextShowFlag"
      :next-href="nextObject.id"
      :next-src="nextObject.thumbImg.url"
      :next-title="nextObject.title"
    ></the-articles-next>
  </ul>
  <!-- ./l-artcle-links -->
</template>

<script>
export default {
  name: 'TheArticles',
  props: {
    nextObject: {
      type: Object,
      default: () => {},
    },
    nextShowFlag: {
      type: Boolean,
      default: false,
    },
    prevObject: {
      type: Object,
      default: () => {},
    },
    prevShowFlag: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
