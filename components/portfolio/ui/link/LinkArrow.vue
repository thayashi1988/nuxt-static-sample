<template>
  <nuxt-link :to="href" :class="`m-link${classReturn.addClass}`" data-icon="arrow">
    <slot></slot>
  </nuxt-link>
</template>
<script>
export default {
  name: 'LinkArrow',
  props: {
    href: {
      type: String,
      default: '',
    },
    cls: {
      type: String,
      default: '',
    },
  },
  computed: {
    classReturn() {
      const addClass = this.cls ? ` ${this.cls}` : ''
      return {
        addClass,
      }
    },
  },
}
</script>
