<template>
  <div class="l-toc">
    <h3 class="m-heading-3 m-mb-0">目次</h3>
    <ul class="l-toc-list">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TocArticle',
}
</script>
