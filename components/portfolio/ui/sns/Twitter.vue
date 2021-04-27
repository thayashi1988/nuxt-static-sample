<template>
  <div class="l-twiiter">
    <button>
      <!-- <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        class="twitter-share-button"
        data-show-count="false"
        data-lang="ja"
        data-size="large"
        @click="twitterShareUrl"
      >
      </a> -->
      <fa data-lang="ja" ata-show-count="false" :icon="faTwitterSquare" @click="twitterShareUrl" />
    </button>
    <!-- <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->
  </div>
</template>
<script>
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
export default {
  name: 'Twitter',
  computed: {
    faTwitterSquare() {
      return faTwitterSquare
    },
  },
  methods: {
    twitterShareUrl(e) {
      e.preventDefault()
      // 現在のURLを取得
      const path = encodeURIComponent(location.pathname)
      // シェアする画面を設定
      const shareUrl = `https://twitter.com/intent/tweet?url=https://pakumogu.xyz${path}`
      // シェア用の画面へ別窓で移行
      window.open(shareUrl, '_blank')
    },
  },
}
</script>
