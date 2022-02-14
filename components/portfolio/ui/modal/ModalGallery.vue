<template>
  <transition name="modal">
    <div v-show="modalShow" class="l-modal" :modal-fixed="handleBodyFixed">
      <div class="l-modal-inner">
        <div class="l-grid-container">
          <div class="l-grid-row">
            <div class="l-grid-col" data-col="5" data-col-sp="12" data-padding="true" data-padding-sp="false">
              <div class="m-modal-img">
                <a
                  :href="modalData.galleryModalLink"
                  target="_blank"
                  class="m-modal-txt-link"
                  @click="handleGAEventImg"
                >
                  <img :src="modalData.galleryModalImg" :alt="modalData.galleryModalTitle" width="243" height="154"
                /></a>
              </div>
            </div>
            <div class="l-grid-col" data-col="7" data-col-sp="12" data-padding="true" data-padding-sp="false">
              <p class="m-modal-lead">
                <a
                  :href="modalData.galleryModalLink"
                  target="_blank"
                  class="m-modal-txt-link"
                  @click="handleGAEventTitle"
                  >{{ modalData.galleryModalTitle }}</a
                >
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
    modalFixed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isMounted: false,
    }
  },
  computed: {
    handleBodyFixed() {
      if (this.modalShow) {
        return this.bodyFixedOn()
      } else if (this.isMounted) {
        return this.bodyFixedOff()
      }
      return null
    },
  },
  mounted() {
    this.isMounted = true
  },
  methods: {
    bodyFixedOn() {
      const scrollPosition = window.pageYOffset
      const scrollbarWidth = window.innerWidth - document.body.clientWidth
      const bodyFixedStyles = {
        paddingRight: scrollbarWidth !== 0 ? `${scrollbarWidth}px` : '',
        position: 'fixed',
        top: `-${scrollPosition}px`,
        overflow: 'hidden',
        width: '100vw',
      }
      Object.keys(bodyFixedStyles).forEach((key) => {
        document.body.style[key] = bodyFixedStyles[key]
      })
      document.querySelector('.l-header').style.width = `100vw`
    },
    bodyFixedOff() {
      document.querySelector('.l-header').style.width = ``
      const backToPosition = parseInt(document.body.style.top) * -1
      const bodyFixedRemoveStyles = {
        paddingRight: ``,
        position: '',
        top: ``,
        overflow: '',
        width: '',
      }
      Object.keys(bodyFixedRemoveStyles).forEach((key) => {
        document.body.style[key] = bodyFixedRemoveStyles[key]
      })
      window.scrollTo(0, backToPosition)
    },
    onModalTriggerClose() {
      const close = false
      this.$emit('onModalTriggerClose', close)
    },
    handleGAEventImg() {
      this.$ga.event({
        eventCategory: 'link_img',
        eventAction: 'click',
        eventLabel: 'https://nextjs-blog-two-lilac-12.vercel.app/',
        eventValue: 1,
      })
    },
    handleGAEventTitle() {
      this.$ga.event({
        eventCategory: 'link_title',
        eventAction: 'click',
        eventLabel: 'https://nextjs-blog-two-lilac-12.vercel.app/',
        eventValue: 1,
      })
    },
  },
}
</script>
