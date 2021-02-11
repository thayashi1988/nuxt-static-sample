<template>
  <div class="l-card">
    <div class="m-card-thumb">
      <nuxt-link :to="articleHref"><img :src="articleImg" alt="" /></nuxt-link>
    </div>
    <div class="l-card-body">
      <card-date :up-date-boolean="articleDate !== articleDateUpDate">
        <template #date>
          {{ articleDate | formatDate }}
        </template>
        <template #upDate>
          {{ articleDateUpDate | formatDate }}
        </template>
      </card-date>
      <heading-2 data-type="cardttl">
        <nuxt-link :to="articleHref" class="m-card-ttl">{{
          articleTitle
        }}</nuxt-link>
      </heading-2>
      <!-- eslint-disable-next-line vue/no-v-html-->
      <div class="m-card-txt" v-html="articleBody"></div>
      <card-btn :to="articleHref" data-width="small">{{ btnTxt }}</card-btn>
    </div>
    <!-- ./l-card-body -->
  </div>
  <!-- ./l-card -->
</template>
<script>
export default {
  name: 'Card',
  props: {
    articleTitle: {
      type: String,
      required: true,
    },
    articleBody: {
      type: String,
      required: true,
    },
    articleDate: {
      type: String,
      required: true,
    },
    articleDateUpDate: {
      type: String,
      required: true,
    },
    articleImg: {
      type: String,
      required: true,
    },
    articleHref: {
      type: String,
      required: true,
    },
    btnTxt: {
      type: String,
      default: '',
    },
  },
}
</script>
