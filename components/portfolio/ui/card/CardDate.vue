<template>
  <p class="m-card-type">
    <span class="m-card-date"
      >初稿：<slot name="date">{{ date }}</slot></span
    >
    <span v-if="upDateBoolean" class="m-card-date m-card-date-update"
      >更新：<slot name="upDate">{{ upDate }}</slot></span
    >
    <!-- <span class="m-label"><a href="/single/">ラベル</a></span> -->
  </p>
</template>
<script>
export default {
  name: 'CardDate',
  props: {
    date: {
      type: String,
      default: '',
    },
    upDate: {
      type: String,
      default: '',
    },
    upDateBoolean: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
