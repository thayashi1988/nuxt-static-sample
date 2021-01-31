<template>
  <li
    v-scroll="handleScroll"
    class="l-grid-col is-hide"
    :class="[{ 'is-show-bottom': scrollFlag }]"
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
    // eslint-disable-next-line
    serviceData: Object,
  },
  data() {
    return {
      scrollFlag: false,
    }
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
