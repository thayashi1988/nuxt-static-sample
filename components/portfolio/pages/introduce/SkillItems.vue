<template>
  <li class="l-grid-col" data-col="3" data-col-sp="4" data-padding="true">
    <div
      :id="skillData.skillName"
      v-scroll="handleScroll"
      :class="[{ 'is-show-bottom': scrollFlag }, { [addClassData]: scrollFlag }]"
      class="l-progress js-progress"
    >
      <p class="m-progress-txt">{{ skillData.skillName }}</p>
      <p class="m-progress-ttl">
        <img :src="skillData.skillIconPath" :alt="skillData.skillName" />
      </p>
      <p class="m-progress-value">{{ skillData.skillValue }}</p>
    </div>
    <!-- ./l-progress -->
  </li>
</template>
<script>
export default {
  name: 'SkillItems',
  props: {
    skillData: {
      type: Object,
      default: () => {},
    },
    addClassData: {
      type: String,
      default: '',
    },
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
