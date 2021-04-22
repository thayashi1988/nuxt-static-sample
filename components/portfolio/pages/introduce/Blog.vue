<template>
  <div v-scroll="handleScroll" :class="[{ 'is-show-bottom': scrollFlag }]" class="js-blog is-hide">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Blog',
  data() {
    return {
      scrollFlag: false,
    }
  },
  methods: {
    handleScroll(evt, el) {
      const top = el.getBoundingClientRect().top
      const wh = window.innerHeight
      // console.log(`${top} : ${wh}`)
      if (top < wh / 1) this.scrollFlag = true
    },
  },
}
</script>
