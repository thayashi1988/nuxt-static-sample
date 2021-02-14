<template>
  <main class="l-main" role="main">
    <div class="l-main-inner">
      <the-main-visual
        :heading-title="title"
        :heading-sub-title="subTitle"
        :heading-sub-title-show="subTitleShow"
      ></the-main-visual>
      <slot />
    </div>
    <!-- ./l-main-inner -->
  </main>
</template>
<script>
export default {
  name: 'TheMain',
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
    subTitleShow: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
