<template>
  <div class="l-modal is-hide">
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
      <button class="m-modal-close js-modal-close"><span>>閉じる</span></button>
      <div class="l-btn">
        <a href="#" class="m-btn js-modal-close" data-width="middle">閉じる</a>
      </div>
    </div>
  </div>
  <!-- ./l-modal -->
</template>

<script>
export default {
  name: 'Modal',
  props: {
    // eslint-disable-next-line
    modalData: Object,
  },
}
</script>
