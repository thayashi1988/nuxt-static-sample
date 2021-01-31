<template>
  <li class="l-grid-col" data-col="3" data-col-sp="4" data-padding="true">
    <div
      :id="progressData.skill"
      v-scroll="handleScroll"
      :class="[{ 'is-show-bottom': scrollFlag }]"
      class="l-progress js-progress"
    >
      <p class="m-progress-txt">{{ progressData.skill }}</p>
      <p class="m-progress-ttl">
        <img :src="progressData.iconPath" :alt="progressData.skill" />
      </p>
      <p class="m-progress-value">{{ progressData.skillValue }}</p>
    </div>
    <!-- ./l-progress -->
  </li>
</template>
<script>
export default {
  name: 'ProgressItems',
  props: {
    // eslint-disable-next-line
    progressData: Object,
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
