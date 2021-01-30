<template>
  <header class="l-header">
    <div class="l-header-inner">
      <div class="l-header-col">
        <the-logo link="/" />
      </div>
      <div class="l-header-col">
        <the-hamburger-menu>MENU</the-hamburger-menu>
        <the-nav></the-nav>
      </div>
    </div>
    <!-- ./l-header-inner -->
  </header>
  <!-- ./l-header -->
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    menuTrigger() {
      if (this.isOpen) {
        this.isOpen = false
        this.$router.push({ path: event.target.pathname })
      } else {
        this.$router.push({ path: event.target.pathname })
      }
    },
  },
}
</script>
