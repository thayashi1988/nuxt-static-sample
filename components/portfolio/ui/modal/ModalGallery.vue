<template>
  <transition name="modal">
    <div v-show="modalShow" class="l-modal">
      <div class="l-modal-inner">
        <div class="l-grid-container">
          <div class="l-grid-row">
            <div class="l-grid-col" data-col="5" data-col-sp="12" data-padding="true" data-padding-sp="false">
              <div class="m-modal-img">
                <a :href="modalData.galleryModalLink" target="_blank" class="m-modal-txt-link">
                  <img :src="modalData.galleryModalImg" :alt="modalData.galleryModalTitle"
                /></a>
              </div>
            </div>
            <div class="l-grid-col" data-col="7" data-col-sp="12" data-padding="true" data-padding-sp="false">
              <p class="m-modal-lead">
                <a :href="modalData.galleryModalLink" target="_blank" class="m-modal-txt-link">{{
                  modalData.galleryModalTitle
                }}</a>
              </p>
              <!-- eslint-disable-next-line -->
              <p class="m-modal-txt" v-html="modalData.galleryModalBody"></p>
              <ul class="m-modal-list">
                <li v-for="(listData, key) in modalData.galleryModalList" :key="key" class="m-modal-list-item">
                  <span class="m-modal-list-item-icon">{{ modalData.galleryModalListIcon }}</span
                  ><span class="m-modal-list-item-body">{{ listData.galleryModalListBody }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- ./l-grid-container -->
        <button class="m-modal-close js-modal-close" @click="onModalTriggerClose">
          <span>>閉じる</span>
        </button>
        <div class="l-btn">
          <button type="button" class="m-btn js-modal-close" data-width="middle" @click="onModalTriggerClose">
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
