<template>
  <layout-wrraper>
    <layout-visual title="Menu" :height="40" visual="visual-menu" />
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <div class="mb-20">
        <layout-menu-list
          v-for="(item, index) in items"
          :key="index"
          :image="item.image"
          :image-url="item.image.url"
          :name="item.name"
          :body="item.body"
          :price="item.price"
        />
      </div>
      <base-button name="トップへ戻る" link="/" />
    </div>
  </layout-wrraper>
</template>
<script>
import axios from 'axios'
import LayoutMenuList from '../../components/LayoutMenuList.vue'
const title = 'メニュー'

export default {
  components: { LayoutMenuList },
  async asyncData({ $config, error }) {
    try {
      const { data } = await axios.get(`${$config.apiUrl}/menu`, {
        headers: { 'X-API-KEY': $config.apiKey },
      })
      return {
        items: data.contents,
      }
    } catch (err) {
      error({
        statusCode: err.response.status,
        message: err.response.data.message,
      })
    }
  },
  head() {
    return {
      title: `${title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${title}の説明ページです。`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${title}の説明ページです。`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${title} | github-nuxt-static-sample`,
        },
      ],
    }
  },
}
</script>
