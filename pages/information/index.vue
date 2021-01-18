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

export default {
  components: { LayoutInformationList },
  async asyncData({ $config, error }) {
    // try {
    const { data } = await axios.get(`${$config.apiUrl}/information`, {
      headers: { 'X-API-KEY': $config.apiKey },
    })
    return {
      informationItems: data.contents,
    }
    // } catch (err) {
    //   error({
    //     statusCode: err.response.status,
    //     message: err.response.data.message,
    //   })
    // }
  },
  mounted() {
    // console.log(process.env.API_URL)
  },
  head() {
    return {
      title: 'インフォメーション',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'インフォメーションページの説明',
        },
      ],
    }
  },
}
</script>
