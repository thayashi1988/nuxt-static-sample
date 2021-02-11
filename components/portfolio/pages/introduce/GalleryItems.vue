<template>
  <li
    v-scroll="handleScroll"
    :class="[scrollFlag ? 'is-show-bottom' : 'is-hide']"
    class="l-grid-col"
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
          <img :src="galleryData.galleryImg" alt="" />
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
      this.$emit('onModalTriggerClick')
    },
    handleScroll(evt, el) {
      const top = el.getBoundingClientRect().top
      const wh = window.innerHeight
      if (top < wh / 1.5) this.scrollFlag = true
    },
  },
}
</script>
