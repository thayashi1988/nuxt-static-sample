<template>
  <div
    v-scroll="handleScroll"
    :class="[{ 'is-show-bottom': scrollFlag }]"
    class="js-contact is-hide"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Contact',
  data() {
    return {
      scrollFlag: false,
    }
  },
  methods: {
    handleScroll(evt, el) {
      const top = el.getBoundingClientRect().top
      const wh = window.innerHeight
      if (top < wh / 1.5) this.scrollFlag = true
    },
  },
}
</script>
