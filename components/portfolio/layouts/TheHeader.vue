<template>
  <header class="l-header">
    <div class="l-header-inner">
      <div class="l-header-col">
        <the-logo link="/" />
      </div>
      <div class="l-header-col">
        <the-hamburger-menu
          :menu-toggle-class="menuTrigger"
          @onMenuTriggerClick="menuOpen"
          >{{ menuTxt }}</the-hamburger-menu
        >
        <the-nav :layer-toggle-class="menuTrigger"></the-nav>
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
      menuTxt: 'MENU',
      menuToggleTxt: {
        open: 'MENU',
        close: 'CLOSE',
      },
      menuTrigger: false,
    }
  },
  methods: {
    menuOpen() {
      this.menuTrigger = !this.menuTrigger
      this.menuTxt = this.menuTrigger
        ? this.menuToggleTxt.close
        : this.menuToggleTxt.open
    },
  },
}
</script>
