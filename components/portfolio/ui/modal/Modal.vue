<template>
  <transition name="modal">
    <div v-show="modalShow" class="l-modal" :modal-fixed="handleBodyFixed">
      <div class="l-modal-inner">
        <slot></slot>
        <button class="m-modal-close js-modal-close" @click="onModalTriggerClose">
          <span>>モーダルを閉じる</span>
        </button>
        <div class="l-btn">
          <button type="button" class="m-btn js-modal-close" data-width="middle" @click="onModalTriggerClose">
            モーダルを閉じる
          </button>
        </div>
      </div>
    </div>
    <!-- ./l-modal -->
  </transition>
</template>

<script>
export default {
  name: 'Modal',
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
      this.$emit('onModalTriggerClose')
    },
  },
}
</script>
