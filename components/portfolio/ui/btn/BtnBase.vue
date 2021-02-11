<template>
  <div :class="{ 'l-btn': containerClass }">
    <nuxt-link :to="to" class="m-btn" :data-width="dataWidth">
      <slot></slot>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'BtnBase',
  props: {
    to: {
      type: String,
      default: '',
    },
    dataWidth: {
      type: String,
      default: '',
    },
    containerClass: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
