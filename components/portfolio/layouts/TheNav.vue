<template>
  <nav class="l-nav is-transition" :class="{ 'is-open-nav': layerToggleClass }">
    <ul class="m-nav">
      <li v-for="(item, key) in navTitles" :key="key">
        <nuxt-link :to="item.link" class="js-scroll" @click.native.prevent="menuCloseTrrigerGnavi">
          {{ item.title }}
        </nuxt-link>
      </li>
      <li class="m-nav-switch">
        <the-dark-mode-switch />
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'TheNav',
  props: {
    layerToggleClass: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      navTitles: [
        { title: 'introduce', link: '/introduce' },
        { title: 'contact', link: '/contact' },
        // { title: 'skills', link: '/introduce#skills' },
        // { title: 'service', link: '/introduce#service' },
        // { title: 'gallery', link: '/introduce#gallery' },
        // { title: 'blog', link: '/blog' },
      ],
    }
  },
  methods: {
    menuCloseTrrigerGnavi() {
      const menuCloseBooleanGnavi = false
      this.$emit('menuCloseTrrigerGnavi', menuCloseBooleanGnavi)
      this.$router.push({ path: event.target.pathname })
    },
  },
}
</script>
