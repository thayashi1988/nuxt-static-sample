<template>
  <h3 class="m-heading-3" :data-type="dataType">
    <span v-if="dataType !== 'article'"><slot></slot></span>
    <slot v-else></slot>
  </h3>
</template>
<script>
export default {
  name: 'Heading3',
  props: {
    dataType: {
      type: String,
      default: '',
      require: false,
    },
  },
}
</script>
