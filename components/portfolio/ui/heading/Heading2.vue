<template>
  <h2 class="m-heading-2" :data-type="dataType">
    {{ headingSecondTitle }}
    <slot />
    <span v-if="dataType === ''" class="m-header-txtsub">
      {{ headingSecondSubTitle }}
    </span>
  </h2>
</template>
<script>
export default {
  name: 'Heading2',
  props: {
    dataType: {
      type: String,
      default: '',
      require: false,
    },
    headingSecondTitle: {
      type: String,
      default: '',
    },
    headingSecondSubTitle: {
      type: String,
      default: '',
    },
  },
}
</script>
