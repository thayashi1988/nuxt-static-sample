<template>
  <li>
    <dl>
      <dt>
        <span class="m-date">{{ latestArticle.date | formatDate }}</span>
      </dt>
      <dd>
        <!-- eslint-disable -->
        <nuxt-link
          :to="latestArticle.id"
          v-html="latestArticle.body"
        ></nuxt-link>
      </dd>
    </dl>
  </li>
</template>
<script>
export default {
  name: 'TheSideLatestItems',
  props: {
    latestArticle: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
