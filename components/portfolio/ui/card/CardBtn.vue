<template>
  <div class="l-btn">
    <nuxt-link :to="to" class="m-btn m-card-btn" :data-width="dataWidth">
      <slot></slot>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'CardBtn',
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
