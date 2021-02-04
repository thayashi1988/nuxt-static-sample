<template>
  <transition name="modal">
    <div v-show="modalShow" class="l-modal">
      <div class="l-modal-inner">
        <div class="l-grid-container">
          <div class="l-grid-row">
            <div
              class="l-grid-col"
              data-col="4"
              data-col-sp="12"
              data-padding="true"
              data-padding-sp="false"
            >
              <div class="m-modal-img">
                <img :src="modalData.img" alt="" />
              </div>
            </div>
            <div
              class="l-grid-col"
              data-col="8"
              data-col-sp="12"
              data-padding="true"
              data-padding-sp="false"
            >
              <p class="m-modal-lead">{{ modalData.title }}</p>
              <p class="m-modal-txt">{{ modalData.body }}</p>
            </div>
          </div>
        </div>
        <!-- ./l-grid-container -->
        <button
          class="m-modal-close js-modal-close"
          @click="onModalTriggerClose"
        >
          <span>>閉じる</span>
        </button>
        <div class="l-btn">
          <button
            type="button"
            class="m-btn js-modal-close"
            data-width="middle"
            @click="onModalTriggerClose"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
    <!-- ./l-modal -->
  </transition>
</template>

<script>
export default {
  name: 'ModalGallery',
  props: {
    modalData: {
      type: Object,
      default: () => {},
    },
    modalShow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onModalTriggerClose() {
      const close = false
      this.$emit('onModalTriggerClose', close)
    },
  },
}
</script>
