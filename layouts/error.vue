<template>
  <layout-wrraper>
    <layout-visual title="PAGE NOT FOUND" visual="visual-error" :height="40" />
    <div class="container w-full mx-auto pt-20 pb-20 px-6 md:px-0">
      <div class="mb-20">
        <p class="text-center text-lg font-medium text-gray-900">
          お探しのページは存在しません。
        </p>
      </div>
      <base-button name="トッページへ戻る" link="/"></base-button>
    </div>
  </layout-wrraper>
</template>
<script>
export default {
  head() {
    return {
      title: 'エラー',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '存在しないページです。',
        },
      ],
    }
  },
}
</script>
