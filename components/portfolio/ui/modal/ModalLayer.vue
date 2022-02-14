<template>
  <transition name="modal">
    <div v-if="layerShow" class="l-modal-layer js-modal-close" @click="onModalLayerClose"></div>
  </transition>
</template>

<script>
export default {
  name: 'ModalLayer',
  props: {
    layerShow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onModalLayerClose() {
      this.$emit('onModalLayerClose')
    },
  },
}
</script>
