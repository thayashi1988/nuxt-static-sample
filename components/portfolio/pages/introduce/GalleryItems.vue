<template>
  <li
    v-scroll="handleScroll"
    :class="[{ 'is-show-bottom': scrollFlag }]"
    class="l-grid-col is-hide"
    data-col="3"
    data-col-sp="6"
    data-padding="true"
    data-padding-sp="false"
  >
    <div class="l-thumbnail">
      <div class="m-thumbnail-img">
        <button
          type="button"
          class="m-modal-link js-modal"
          data-icon="modal"
          @click="onModalTriggerClick"
        >
          <img :src="galleryData.img" alt="" />
        </button>
      </div>
    </div>
    <!-- ./l-thumbnail -->
  </li>
</template>
<script>
export default {
  name: 'GalleryItems',
  props: {
    galleryData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      scrollFlag: false,
    }
  },
  methods: {
    onModalTriggerClick() {
      const open = true
      this.$emit('onModalTriggerClick', open)
    },
    handleScroll(evt, el) {
      const top = el.getBoundingClientRect().top
      const wh = window.innerHeight
      if (top < wh / 1.5) this.scrollFlag = true
    },
  },
}
</script>
