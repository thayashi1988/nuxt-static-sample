<template>
  <li
    ref="sss"
    v-scroll="handleScroll"
    class="l-grid-col"
    :class="[scrollFlag ? 'is-show-bottom' : 'is-hide']"
    :style="scrollFlag ? delay : ''"
    data-col="4"
    data-col-sp="12"
    data-padding="true"
    data-padding-sp="false"
  >
    <div class="l-media">
      <h3 class="m-heading-3">
        <span>{{ serviceData.title }}</span>
      </h3>
      <p class="m-media-img">
        <span><img :src="serviceData.img" alt="" /></span>
      </p>
      <!-- eslint-disable-next-line -->
      <p class="m-media-txt" v-html="serviceData.body"></p>
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
      aaa: [],
    }
  },
  watch: {
    // この関数は question が変わるごとに実行されます。
    scrollFlag() {
      console.log('フラグがtrueになったよーー')
      console.log(this.aaa)
    },
  },
  mounted() {
    this.aaa = this.$refs.sss
    console.log(this.aaa)
  },
  // computed: {
  //   aaa() {
  //     if (this.scrollFlag) {
  //       this.test()
  //     }
  //     return this.test()
  //   },
  // },
  methods: {
    handleScroll(evt, el) {
      const top = el.getBoundingClientRect().top
      const wh = window.innerHeight
      if (top < wh / 1.5) this.scrollFlag = true
    },
    // test() {
    //   setTimeout(() => {
    //     console.log('aaaaaaaaaaaa')
    //   }, 1000)
    // },
  },
}
</script>
