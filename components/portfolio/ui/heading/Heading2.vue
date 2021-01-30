<template>
  <h2 id="intorduce" class="m-heading-2">
    {{ headingSecondTitle
    }}<span class="m-header-txtsub">{{ headingSecondSubTitle }}</span>
  </h2>
</template>
<script>
export default {
  name: 'Heading2',
  props: {
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
