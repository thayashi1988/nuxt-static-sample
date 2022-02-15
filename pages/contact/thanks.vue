<template>
  <the-main :title="heading1" :sub-title="heading1Sub">
    <btn-base class="m-mt-30" to="/" data-width="middle">TOPへ戻る</btn-base>
  </the-main>
</template>
<script>
export default {
  data() {
    return {
      heading1: 'お問い合わせ完了',
      heading1Sub: 'お問い合わせありがとうございました。返信までしばらくお待ち下さい、',
    }
  },
  head() {
    return {
      meta: [{ hid: 'robots', name: 'robots', content: 'noindex' }],
    }
  },
}
</script>
