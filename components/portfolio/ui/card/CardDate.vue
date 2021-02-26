<template>
  <p class="m-card-type">
    <span class="m-card-date"
      >初稿：<slot name="date">{{ date }}</slot></span
    >
    <span v-if="upDateBoolean" class="m-card-date m-card-date-update"
      >更新：<slot name="upDate">{{ upDate }}</slot></span
    >
    <card-tag v-if="tagShow" :tag-name="tag"></card-tag>
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
    tag: {
      type: String,
      default: '',
    },
    tagShow: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
