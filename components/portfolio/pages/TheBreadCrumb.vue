<template>
  <div class="l-section l-section-last">
    <div class="l-section-inner">
      <div id="l-breadcrumbs" class="l-breadcrumbs">
        <ol
          v-if="test.length > 0"
          class="l-breadcrumbs-list"
          itemscope
          itemtype="https://schema.org/BreadcrumbList"
        >
          <li
            class="l-breadcrumbs-item"
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
          >
            <nuxt-link itemprop="item" to="/"
              ><span itemprop="name">ぱくもぐTOP</span></nuxt-link
            >
            <meta itemprop="position" content="1" />
          </li>
          <li
            v-for="(path, index) in test"
            :key="path"
            class="l-breadcrumbs-item"
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
          >
            <nuxt-link
              v-if="index < test.length - 1"
              itemprop="item"
              :to="`/` + path"
              ><span itemprop="name">{{ path }}</span></nuxt-link
            >
            <span v-else itemprop="name">{{ path }}</span>
            <meta itemprop="position" :content="index + 2" />
          </li>
          <!-- <li class="breadcrumbs__item">
            <a href="https://pakumogu.sakura.ne.jp/top/blog/">
              ぱくもぐブログ
            </a>
          </li> -->
        </ol>
      </div>
      <!-- <p>{{ this.$route.path }}</p>
      <p>{{ this.$route.name }}</p>
      <p>{{ test }}</p> -->
      <!-- #breadcrumbs.breadcrumbs -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheBreadCrumb',
  props: {
    breadCrumbLink: {
      type: String,
      default: '',
    },
    breadCrumbTitle: {
      type: String,
      default: '',
    },
    breadCrumbNum: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    test() {
      const path = this.$route.path
      // const paths = []
      // if (path !== '/') {
      //   path = path.replace(/\/.*\//, '')
      //   paths.push(path)
      // }
      const paths = path.split('/')
      // console.log(paths)
      // paths.push({ to: path.split('/'), name: path.split('/') })
      // const slashLen = path.split('/')
      // while (path !== '/') {
      //   paths.push(path)
      //   path = path.replace(/[^\/]+\/$/, '')
      // }
      return paths
    },
  },
}
</script>
