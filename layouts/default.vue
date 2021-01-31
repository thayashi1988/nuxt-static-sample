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
          content: `https://nervous-franklin-aa026b.netlify.app${this.$route.path}`,
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://nervous-franklin-aa026b.netlify.app${this.$route.path}`,
        },
      ],
    }
  },
}
</script>
