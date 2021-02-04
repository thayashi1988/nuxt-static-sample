<template>
  <nuxt-link :to="link" class="m-link" data-icon="arrow"
    ><slot></slot
  ></nuxt-link>
</template>
<script>
export default {
  name: 'LinkArrow',
  props: {
    link: {
      type: String,
      default: '',
    },
  },
}
</script>
