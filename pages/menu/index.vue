<template>
  <layout-wrraper>
    <layout-visual title="Menu" :height="40" visual="visual-menu" />
    <div class="container w-full mx-auto pt-20 pb-20 px-6 md:px-0">
      <div class="mb-20">
        <layout-menu-list />
      </div>
    </div>
    <base-button name="トップへ戻る" link="/" />
  </layout-wrraper>
</template>
<script>
import LayoutMenuList from '../../components/LayoutMenuList.vue'
export default {
  components: { LayoutMenuList },
  head() {
    return {
      title: 'メニュー',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'メニューページの説明',
        },
      ],
    }
  },
}
</script>
