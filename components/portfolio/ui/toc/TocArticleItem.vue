<template>
  <li class="m-toc-item">
    <a
      v-if="tocContents.name === 'h2'"
      v-scroll-to="{ el: `#${tocContents.id}`, offset: scrollOffset }"
      :href="`/articles/article/${pageId}#${tocContents.id}`"
    >
      {{ tocContents.text }}
    </a>
    <ul v-else class="l-toc-list-under">
      <li class="m-toc-list-under-item">
        <a
          v-scroll-to="{ el: `#${tocContents.id}`, offset: scrollOffset }"
          :href="`/articles/article/${pageId}#${tocContents.id}`"
        >
          {{ tocContents.text }}
        </a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'TocArticleItem',
  props: {
    tocContents: {
      type: Object,
      default: () => {},
    },
    scrollOffset: {
      type: Function,
      default: () => {},
    },
    pageId: {
      type: String,
      default: '',
    },
  },
}
</script>
