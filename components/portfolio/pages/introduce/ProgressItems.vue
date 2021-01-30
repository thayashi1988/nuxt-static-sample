<template>
  <li class="l-grid-col" data-col="3" data-col-sp="4" data-padding="true">
    <div :id="progressData.skill" class="l-progress js-progress">
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
}
</script>
