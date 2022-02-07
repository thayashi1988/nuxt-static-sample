<template>
  <p :class="`m-txt${classReturn.addClass}`">
    <slot></slot>
  </p>
</template>
<script>
export default {
  name: 'TextNormal',
  props: {
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
