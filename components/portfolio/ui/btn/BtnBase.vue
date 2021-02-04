<template>
  <div class="l-btn">
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
  },
}
</script>
