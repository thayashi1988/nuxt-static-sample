<template>
  <li class="m-pager-item">
    <span v-if="pagerNum === 1 && pages === 1" class="m-pager-current">{{ pages }}</span>
    <nuxt-link v-else-if="pages === 1" to="/">{{ pages }}</nuxt-link>
    <span v-else-if="pages === pagerNum" class="m-pager-current">{{ pages }}</span>
    <nuxt-link v-else :to="href">{{ pages }}</nuxt-link>
  </li>
</template>
<script>
export default {
  name: 'PagerItems',
  props: {
    pagerNum: {
      type: Number,
      default: 0,
    },
    pages: {
      type: Number,
      default: 0,
    },
    href: {
      type: String,
      default: '',
    },
  },
}
</script>
