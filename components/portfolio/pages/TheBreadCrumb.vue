<template>
  <div class="l-section l-section-last">
    <div class="l-section-inner">
      <div class="l-breadcrumbs">
        <ol
          v-if="createBreadCrumb.length > 0"
          class="l-breadcrumbs-list"
          itemscope
          itemtype="https://schema.org/BreadcrumbList"
        >
          <li class="m-breadcrumbs-item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <nuxt-link itemprop="item" to="/">
              <span itemprop="name">ぱくもぐTOP</span>
            </nuxt-link>
            <meta itemprop="position" content="1" />
          </li>
          <li
            v-for="(path, index) in createBreadCrumb"
            :key="path"
            class="m-breadcrumbs-item"
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
          >
            <nuxt-link v-if="index < createBreadCrumb.length - 1" itemprop="item" :to="`/` + path">
              <span itemprop="name">{{ path }}</span>
            </nuxt-link>
            <span v-else itemprop="name">{{ breadCrumbTitle }}</span>
            <meta itemprop="position" :content="index + 2" />
          </li>
        </ol>
      </div>

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
    createBreadCrumb() {
      const path = this.$route.path
      // console.log(path)
      const pathsArray = path.split('/')
      // console.log(pathsArray)
      const pathsOrthopaedy = pathsArray.filter((str) => str !== '')
      let paths = pathsOrthopaedy.filter((str) => str !== 'article')
      paths = paths.filter((str) => str !== 'articles')
      // console.log(paths)
      return paths
    },
  },
}
</script>
