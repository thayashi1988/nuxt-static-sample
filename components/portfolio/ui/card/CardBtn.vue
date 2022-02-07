<template>
  <div :class="`l-btn${classReturn.addConainerClass}`">
    <nuxt-link :to="to" :class="`m-btn m-card-btn${classReturn.addClass}`" :data-width="dataWidth">
      <slot></slot>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'CardBtn',
  props: {
    to: {
      type: String,
      default: '',
    },
    containerCls: {
      type: String,
      default: '',
    },
    cls: {
      type: String,
      default: '',
    },
    dataWidth: {
      type: String,
      default: '',
    },
  },
  computed: {
    classReturn() {
      const addConainerClass = this.containerCls ? ` ${this.containerCls}` : ''
      const addClass = this.cls ? ` ${this.cls}` : ''
      return {
        addConainerClass,
        addClass,
      }
    },
  },
}
</script>
