<template>
  <div class="l-grid-container js-gallery">
    <ul class="l-grid-row">
      <slot></slot>
    </ul>
  </div>
  <!-- ./l-grid-container -->
</template>
<script>
export default {
  name: 'Gallery',
  props: {
    // eslint-disable-next-line
    galleryData: Object,
  },
}
</script>
