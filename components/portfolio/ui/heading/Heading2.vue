<template>
  <h2 v-if="!br" class="m-heading-2" :data-type="dataType">
    {{ headingSecondTitle }}
    <slot />
    <span v-if="dataType === ''" class="m-header-txtsub">
      {{ headingSecondSubTitle }}
    </span>
  </h2>
  <h2 v-else class="m-heading-2" :data-type="dataType"></h2>
</template>
<script>
export default {
  name: 'Heading2',
  props: {
    br: {
      type: Boolean,
      default: false,
      require: false,
    },
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
