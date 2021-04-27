<template>
  <div class="l-facebook">
    <div id="fb-root"></div>
    <div :data-href="currentPath" data-layout="button" data-size="large" @click="fbShareUrl">
      <a
        target="_blank"
        :href="`https://www.facebook.com/sharer/sharer.php?u=https://pakumogu.xyz${currentPath}&amp;src=sdkpreparse`"
        class="fb-xfbml-parse-ignore"
      >
        <fa :icon="faFacebookSquare" />
      </a>
    </div>
  </div>
</template>

<script>
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

export default {
  // 'https://pakumogu.xyz//articles/article/ibcmvoi7i'
  name: 'Facebook',
  data() {
    return {
      currentPath: '',
    }
  },
  computed: {
    faFacebookSquare() {
      return faFacebookSquare
    },
  },
  methods: {
    fbShareUrl() {
      // console.log('location.pathname:', location.pathname)
      // const url = encodeURIComponent(location.href)
      const path = location.pathname
      this.currentPath = path
    },
  },
}
</script>
