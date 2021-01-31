<template>
  <div class="mainWrapper">
    <the-header />
    <Nuxt />
    <the-footer />
    <modal
      v-for="(modalData, key) in modalDatas"
      :key="key"
      :modal-data="modalData"
    ></modal>
  </div>
</template>
<script>
export default {
  computed: {
    modalDatas() {
      const modalDatas = [
        {
          img: require('~/assets/img/icon/icon.png'),
          title: 'タイトル',
          body: '準備中です。。',
        },
      ]
      return modalDatas
    },
  },
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
