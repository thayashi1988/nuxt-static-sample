<template>
  <layout-wrraper>
    <layout-visual
      title="Information"
      :height="40"
      visual="visual-information"
    />
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <layout-information-list
        v-for="(information, key, index) in informationItems"
        :id="information.id"
        :key="index"
        :date="information.date"
        :title="information.title"
      />
      <base-button name="トップへ戻る" link="/" />
    </div>
  </layout-wrraper>
</template>
<script>
import axios from 'axios'
import LayoutInformationList from '../../components/LayoutInformationList.vue.vue'
const title = 'インフォメーション'

export default {
  components: { LayoutInformationList },
  async asyncData({ $config, error }) {
    const { data } = await axios.get(`${$config.apiUrl}/information`, {
      headers: { 'X-API-KEY': $config.apiKey },
    })
    return {
      informationItems: data.contents,
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
          content: `${title}`,
        },
      ],
    }
  },
}
</script>
