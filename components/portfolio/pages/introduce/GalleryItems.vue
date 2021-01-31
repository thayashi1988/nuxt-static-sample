<template>
  <li
    class="l-grid-col is-hid"
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
    // eslint-disable-next-line
    galleryData: Object,
  },
  methods: {
    onModalTriggerClick() {
      const open = true
      this.$emit('onModalTriggerClick', open)
    },
  },
}
</script>
