<template>
  <layout-wrraper>
    <layout-visual
      title="Information"
      :height="40"
      visual="visual-information"
    />
    <div class="w-full md:max-w-3xl mx-auto pt-20 px-6 md:px-0">
      <layout-information-list />
      <base-button name="トップへ戻る" link="/" />
    </div>
  </layout-wrraper>
</template>
<script>
import LayoutInformationList from '../../components/LayoutInformationList.vue.vue'
export default {
  components: { LayoutInformationList },
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
