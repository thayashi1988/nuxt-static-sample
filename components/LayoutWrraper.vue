<template>
  <div class="wrapper">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'LayoutWrraper',
  props: {
    name: {
      type: String,
      default: 'やまだん',
    },
  },
}
</script>
<style scoped>
.wrapper {
  padding-top: 80px;
  @media (min-width: 768px) {
    padding-top: 0;
  }
}
</style>
