<template>
  <div>
    <the-main :title="heading1" :sub-title="heading1Sub">
      <div class="l-grid-container">
        <ul class="l-grid-row" data-align="center">
          <li class="l-grid-col" data-col="4" data-col-sp="6" data-padding="true">
            <btn-base to="/" data-width="middle">TOPページへ</btn-base>
          </li>
          <li class="l-grid-col" data-col="4" data-col-sp="6" data-padding="true">
            <btn-base to="/introduce" data-width="middle"> 自己紹介ページへ </btn-base>
          </li>
        </ul>
      </div>
    </the-main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      heading1: 'エラー',
      heading1Sub: 'このページは存在しないページです。',
    }
  },
  head() {
    return {
      title: `${this.heading1}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `沖縄在住のWebコーダーのブログ、ポートフォリオサイトの${this.heading1}ページです。HTML、CSS、javascriptのスキル、経験、実績を紹介します。`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `沖縄在住のWebコーダーのブログ、ポートフォリオサイトの${this.heading1}ページです。HTML、CSS、javascriptのスキル、経験、実績を紹介します。`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.heading1}`,
        },
      ],
    }
  },
}
</script>
