<template>
  <span :class="`m-label${classReturn.addClass}`"
    ><nuxt-link :to="`/categorys/category/${tagName}`">{{ tagName }}</nuxt-link></span
  >
</template>

<script>
export default {
  name: 'CardTag',
  props: {
    tagName: {
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
