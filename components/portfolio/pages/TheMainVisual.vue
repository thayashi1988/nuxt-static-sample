<template>
  <div class="l-mainvisul">
    <div class="l-mainvisul-inner">
      <div class="l-mainvisul-contents">
        <div class="is-fadein">
          <!-- eslint-disable-next-line -->
          <h1 class="m-heading-1" v-html="headingTitle"></h1>
          <p v-if="headingSubTitleShow" class="m-txt m-ac" data-color="white">
            {{ headingSubTitle }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- ./l-mainvisul -->
</template>
<script>
export default {
  name: 'TheMainVisual',
  props: {
    headingTitle: {
      type: String,
      default: '',
    },
    headingSubTitle: {
      type: String,
      default: '',
    },
    headingSubTitleShow: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
