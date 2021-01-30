<template>
  <div class="l-mainvisul">
    <div class="l-mainvisul-inner">
      <div class="l-mainvisul-contents">
        <div class="is-fadein">
          <h1 class="m-heading-1">{{ headingTitle }}</h1>
          <p class="m-txt m-ac" data-color="white">
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
  },
}
</script>
