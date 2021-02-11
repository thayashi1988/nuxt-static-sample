<template>
  <li
    ref="serviceItemsDom"
    v-scroll="handleScroll"
    class="l-grid-col"
    :class="[scrollFlag ? 'is-show-bottom' : 'is-hide']"
    data-col="4"
    data-col-sp="12"
    data-padding="true"
    data-padding-sp="false"
  >
    <div class="l-media">
      <h3 class="m-heading-3">
        <span>{{ serviceData.serviceTitle }}</span>
      </h3>
      <p class="m-media-img">
        <span
          ><img :src="serviceData.serviceImg" :alt="serviceData.serviceTitle"
        /></span>
      </p>
      <!-- eslint-disable-next-line -->
      <p class="m-media-txt" v-html="serviceData.serviceBody"></p>
    </div>
    <!-- ./l-media -->
  </li>
</template>
<script>
export default {
  name: 'ServiceItems',
  props: {
    serviceData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      scrollFlag: false,
      delay: {
        'animation-delay': '0.3s',
      },
      serviceItemelems: [],
    }
  },
  mounted() {
    this.serviceItemelems = this.$refs.serviceItemsDom
    // console.log('this.serviceItemelems:', this.serviceItemelems)
  },
  methods: {
    handleScroll(evt, el) {
      const top = el.getBoundingClientRect().top
      const wh = window.innerHeight
      if (top < wh / 1.5) this.scrollFlag = true
    },
  },
}
</script>
