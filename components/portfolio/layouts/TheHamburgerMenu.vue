<template>
  <div class="l-menu">
    <button class="m-menu" :class="{ 'is-open': menuToggleClass }" @click="onMenuTriggerClick">
      <span><slot></slot></span>
    </button>
  </div>
</template>
<script>
export default {
  name: 'TheHamburgerMenu',
  props: {
    menuToggleClass: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onMenuTriggerClick() {
      this.$emit('onMenuTriggerClick')
    },
  },
}
</script>
