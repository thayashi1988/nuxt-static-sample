<template>
  <layout-wrraper>
    <NuxtLink to="/index2">index2</NuxtLink>
    <layout-visual
      title="NUXT SAMPLE SITE DEMO"
      message="ああああああああああああああああああああああああああああああああああああああああああああああああああああ"
    />
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <base-heading>MdN Cafeのおすすめメニュー</base-heading>
      <div class="block md:flex md:flex-wrap md:justify-between mb-20 md:mb-0">
        <layout-menu-list
          v-for="(item, index) in menuItems"
          :key="index"
          :image="item.image"
          :image-url="item.image.url"
          :name="item.name"
          :body="item.body"
          :price="item.price"
          item-class="md:w-56 mb-20 shadow-lg bg-gray-200"
          block-class="max-w"
          image-class="w-full"
          data-class="px-6 py-4"
          :flag-body="false"
        />
      </div>
      <base-button name="メニューの一覧" link="/menu" />
      <base-heading>MdN Cafeのお知らせ</base-heading>
      <layout-information-list
        v-for="(information, key, index) in informationItems"
        :id="information.id"
        :key="index"
        :date="information.date"
        :title="information.title"
      />
      <base-button name="お知らせの一覧" link="/information" />
    </div>
  </layout-wrraper>
</template>

<script>
import axios from 'axios'
import BaseHeading from '../components/BaseHeading.vue'
import LayoutInformationList from '../components/LayoutInformationList.vue'

export default {
  components: { BaseHeading, LayoutInformationList },
  async asyncData({ $config, error }) {
    try {
      const menu = await axios.get(
        `${$config.apiUrl}/menu?limit=3&filters=flag[equals]true`,
        {
          headers: { 'X-API-KEY': $config.apiKey },
        }
      )
      const info = await axios.get(`${$config.apiUrl}/information?limit=3`, {
        headers: { 'X-API-KEY': $config.apiKey },
      })
      return {
        menuItems: menu.data.contents,
        informationItems: info.data.contents,
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
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt Sampleページのトップページです。',
        },
      ],
    }
  },
}
</script>
<style></style>
