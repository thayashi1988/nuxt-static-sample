<template>
  <div class="m-header-logo">
    <nuxt-link :to="link" @click.native.prevent="menuCloseTrrigerLogo">
      <img src="~@/assets/img/logo/logo.png" alt="ぱくもぐ" />
    </nuxt-link>
    <span class="m-header-txtsub">Web情報をゆる〜〜く発信</span>
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
  methods: {
    menuCloseTrrigerLogo() {
      const menuCloseBooleanLogo = false
      this.$emit('menuCloseTrrigerLogo', menuCloseBooleanLogo)
      this.$router.push({ path: '/' })
    },
  },
}
</script>
