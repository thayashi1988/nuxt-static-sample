<template>
  <nav class="l-nav is-transition" :class="{ 'is-open-nav': layerToggleClass }">
    <ul class="m-nav">
      <li v-for="(item, key) in navTitles" :key="key">
        <nuxt-link :to="item.link" class="js-scroll">{{
          item.title
        }}</nuxt-link>
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
        { title: 'skills', link: '#skills' },
        { title: 'service', link: '#service' },
        { title: 'gallery', link: '#gallery' },
        { title: 'contact', link: '#contact' },
        { title: 'blog', link: '#blog' },
      ],
    }
  },
}
</script>
