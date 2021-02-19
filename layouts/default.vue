<template>
  <div class="mainWrapper">
    <the-header />
    <Nuxt />
    <the-footer />
  </div>
</template>
<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://pakumogu.xyz/${this.$route.path}`,
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://pakumogu.xyz/${this.$route.path}`,
        },
      ],
    }
  },
}
</script>
