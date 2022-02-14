<template>
  <p class="m-card-type">
    <time class="m-card-date" :datetime="attrPublishDate" itemprop="datepublished">
      初稿：
      <slot name="date">{{ date }}</slot>
    </time>
    <time v-if="upDateBoolean" class="m-card-date m-card-date-update" :datetime="attrUpDate" itemprop="datemodified">
      更新：
      <slot name="upDate">{{ upDate }}</slot>
    </time>
    <card-tag v-if="tagShow" :tag-name="tag" :cls="cardTagCls" />
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
    attrPublishDate: {
      type: String,
      default: '',
    },
    attrUpDate: {
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
    cardTagCls: {
      type: String,
      default: '',
    },
  },
}
</script>
