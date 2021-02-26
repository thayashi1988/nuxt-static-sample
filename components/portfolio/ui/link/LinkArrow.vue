<template>
  <nuxt-link :to="href" class="m-link" data-icon="arrow"
    ><slot></slot
  ></nuxt-link>
</template>
<script>
export default {
  name: 'LinkArrow',
  props: {
    href: {
      type: String,
      default: '',
    },
  },
}
</script>
