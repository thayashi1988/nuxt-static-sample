<template>
  <div class="l-card">
    <div class="m-card-thumb">
      <nuxt-link :to="'/article/' + articleId"
        ><img src="~@/assets/img/article/thumb/thumb_01.jpg" alt=""
      /></nuxt-link>
    </div>
    <div class="l-card-body">
      <p class="m-card-type">
        <span class="m-card-date">{{ articleDate | formatDate }}</span
        ><span class="m-label"><a href="/single/">ラベル</a></span>
      </p>
      <h2 class="m-heading-2" data-type="cardttl">
        <nuxt-link :to="'/article/' + articleId" class="m-card-ttl">{{
          articleTitle
        }}</nuxt-link>
      </h2>
      <p class="m-card-txt">
        {{ articleBody }}
      </p>
      <p class="m-ac">
        <nuxt-link
          :to="'/article/' + articleId"
          class="m-btn m-card-btn"
          data-width="small"
          >この記事を読む</nuxt-link
        >
      </p>
    </div>
    <!-- ./l-card-body -->
  </div>
  <!-- ./l-card -->
</template>
<script>
import axios from 'axios'

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
    articleId: {
      type: String,
      required: true,
    },
  },
}
</script>
