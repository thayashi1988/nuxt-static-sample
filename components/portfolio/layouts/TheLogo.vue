<template>
  <div class="m-header-logo">
    <nuxt-link :to="link"
      ><img src="~@/assets/img/logo/logo.png" alt="ぱくもぐ" /></nuxt-link
    ><span class="m-header-txtsub">Web情報をゆる〜〜く発信</span>
  </div>
</template>
<script>
export default {
  name: 'TheLogo',
  props: {
    link: {
      type: String,
      required: true,
    },
  },
}
</script>
