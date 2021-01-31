<template>
  <div>
    <the-main :title="heading1" sub-title="管理人の自己紹介ページです。">
      <section class="l-section">
        <div class="l-section-inner is-fadein">
          <heading-2
            id="introduce"
            heading-second-title="INTRODUCE"
            heading-second-sub-title="自己紹介"
          ></heading-2>
          <table-normal>
            <table-normal-line
              v-for="(tableData, key) in tableDatas"
              :key="key"
              :table-data="tableData"
            ></table-normal-line>
          </table-normal>
        </div>
        <!-- ./l-section-inner -->
      </section>
      <section class="l-section">
        <div class="l-section-inner">
          <heading-2
            id="skills"
            heading-second-title="skills"
            heading-second-sub-title="スキル"
          ></heading-2>
          <Progress>
            <progress-items
              v-for="(progressData, key) in progressDatas"
              :key="key"
              :progress-data="progressData"
            ></progress-items>
          </Progress>
        </div>
        <!-- ./l-section-inner -->
      </section>
      <!-- ./l-section -->
      <section class="l-section">
        <div class="l-section-inner">
          <heading-2
            id="service"
            heading-second-title="SERVIE"
            heading-second-sub-title="サービス"
          ></heading-2>
          <service>
            <service-items
              v-for="(serviceData, key) in serviceDatas"
              :key="key"
              :service-data="serviceData"
            ></service-items>
          </service>
        </div>
        <!-- ./l-section-inner -->
      </section>
      <!-- ./l-section -->
      <section class="l-section">
        <div class="l-section-inner">
          <heading-2
            id="gallery"
            heading-second-title="GALLERY"
            heading-second-sub-title="ギャラリー"
          ></heading-2>
          <gallery>
            <gallery-items
              v-for="(galleryData, key) in galleryDatas"
              :key="key"
              :gallery-data="galleryData"
              @onModalTriggerClick="modalOpen"
            ></gallery-items>
          </gallery>
        </div>
        <!-- ./l-section-inner -->
      </section>
      <!-- ./l-section -->
      <section class="l-section">
        <div class="l-section-inner">
          <heading-2
            id="contact"
            heading-second-title="CONTACT"
            heading-second-sub-title="お問い合わせ"
          ></heading-2>
          <text-normal
            >Webページコーディングに関しては、以下のお問い合わせからご連絡ください。</text-normal
          >
          <link-arrow link="/contact">お問い合わせはこちらから</link-arrow>
        </div>
        <!-- ./l-section-inner -->
      </section>
      <!-- ./l-section -->
      <section class="l-section">
        <div class="l-section-inner">
          <heading-2
            id="blog"
            heading-second-title="BLOG"
            heading-second-sub-title="ブログ"
          ></heading-2>
          <text-normal
            >技術に関することや、日々の出来事をゆる〜く発信しています。</text-normal
          >
          <link-arrow link="/">Blogはこちらから</link-arrow>
        </div>
        <!-- ./l-section-inner -->
      </section>
      <!-- ./l-section -->
    </the-main>
    <!-- <the-bread-crumb></the-bread-crumb> -->
    <modal-gallery
      v-for="(modalData, key) in modalDatas"
      :key="key"
      :modal-data="modalData"
      :modal-show="show"
      @onModalTriggerClose="modalClose"
    ></modal-gallery>
    <transition name="modal">
      <div
        v-if="show"
        class="l-modal-layer js-modal-close"
        @click="modalLayerClose"
      ></div>
    </transition>
  </div>
</template>
<script>
const title = 'ぱくもぐを管理している人'

export default {
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
  data() {
    return {
      show: false,
    }
  },
  computed: {
    heading1() {
      return title
    },
    tableDatas() {
      const tableDatas = [
        {
          header: 'エリア',
          data: '沖縄',
        },
        {
          header: '経歴',
          data: '専門学校講師→Web制作会社',
        },
        {
          header: '趣味',
          data: '食べ飲み歩き・映画を見る',
        },
      ]
      return tableDatas
    },
    progressDatas() {
      const progressDatas = [
        {
          skill: 'HTML',
          iconPath: require('@/assets/img/icon/icon_html.svg'),
          skillValue: '100%',
        },
        {
          skill: 'CSS',
          iconPath: require('@/assets/img/icon/icon_css.svg'),
          skillValue: '80%',
        },
        {
          skill: 'jQuery',
          iconPath: require('@/assets/img/icon/icon_jquery.svg'),
          skillValue: '70%',
        },
        {
          skill: 'javascript',
          iconPath: require('@/assets/img/icon/icon_js.svg'),
          skillValue: '50%',
        },
        {
          skill: 'Photoshop',
          iconPath: require('@/assets/img/icon/icon_ps.svg'),
          skillValue: '60%',
        },
        {
          skill: 'XD',
          iconPath: require('@/assets/img/icon/icon_xd.svg'),
          skillValue: '70%',
        },
        {
          skill: 'git',
          iconPath: require('@/assets/img/icon/icon_git.svg'),
          skillValue: '70%',
        },
        {
          skill: 'gulp',
          iconPath: require('@/assets/img/icon/icon_gulp.svg'),
          skillValue: '60%',
        },
      ]
      return progressDatas
    },
    serviceDatas() {
      const serviceDatas = [
        {
          title: 'コーディング',
          img: require('~/assets/img/icon/icon_pc.svg'),
          body:
            'HTML/CSS、jQuery、javascriptによるコーディングを行います。<br>ワイヤーフレームに沿ってHTMLの文書構造に沿い、再利用性・メンテナンス性が高いCSS設計を行います。',
        },
        {
          title: 'SEO対策',
          img: require('~/assets/img/icon/icon_seo.svg'),
          body: '検索順位を高めるSEO対策を行います。',
        },
        {
          title: 'コミュニケーション',
          img: require('~/assets/img/icon/icon_communication.svg'),
          body:
            'チャット、オンラインMTGを密に行い、認識齟齬が無いようにお仕事を進めていきます。',
        },
      ]
      return serviceDatas
    },
    galleryDatas() {
      const galleryDatas = [
        {
          // link: '/',
          img: require('~/assets/img/icon/icon.png'),
        },
      ]
      return galleryDatas
    },
    modalDatas() {
      const modalDatas = [
        {
          img: require('~/assets/img/icon/icon.png'),
          title: 'タイトル',
          body: '準備中です。。',
        },
      ]
      return modalDatas
    },
  },
  methods: {
    modalOpen(open) {
      console.log(open)
      this.show = open
    },
    modalClose(close) {
      console.log(close)
      this.show = close
    },
    modalLayerClose() {
      this.show = false
    },
  },
  head() {
    return {
      title: `${title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${title}のトップページです。`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${title}のトップページです。`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${title} | github-nuxt-static-sample`,
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.modal {
  &-enter {
    opacity: 0;
    &-active {
      transition: all 0.5s ease;
    }
  }
  &-leave {
    &-to {
      opacity: 0;
    }
    &-active {
      transition: all 0.5s ease;
    }
  }
}
</style>
