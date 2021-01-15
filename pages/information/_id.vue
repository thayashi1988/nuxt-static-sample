<template>
  <layout-wrraper>
    <layout-visual
      title="Information"
      :height="40"
      visual="visual-information"
    />
    <div class="w-full md:max-w-3xl mx-auto pt-20">
      <h2 class="text-lg pb-5 border-b bordder-gray-500 border-solid font-bold">
        {{ item.title }}
      </h2>
      <div class="pt-4 mb-4">
        <time class="text-gray-700 text-base">{{
          item.date | formatDate
        }}</time>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html-->
      <div class="mb-20" v-html="item.body"></div>
      <base-button name="お知らせへ戻る" link="/information" />
    </div>
  </layout-wrraper>
</template>
<script>
import axios from 'axios'

export default {
  async asyncData({ $config, params, error }) {
    try {
      const { data } = await axios.get(
        `${$config.apiUrl}information/${params.id}`,
        {
          headers: { 'X-API-KEY': $config.apiKey },
        }
      )
      return {
        item: data,
      }
    } catch (err) {
      error({
        erroeCode: 404,
      })
    }
  },
  head() {
    return {
      title: this.item.title,
    }
  },
}
</script>
