<template>
  <div>
    <the-main :title="heading1" :sub-title="heading1Sub">
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
          <skill>
            <skill-items
              v-for="(skillData, key) in SkillDatas"
              :key="key"
              ref="skillItemsDom"
              :skill-data="skillData"
              :add-class-data="addClassData[key]"
            ></skill-items>
          </skill>
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
              @onModalTriggerClick="modalOpen(key)"
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
          <contact>
            <text-normal
              >Webページコーディングに関しては、以下のお問い合わせからご連絡ください。</text-normal
            >
            <link-arrow href="/contact">お問い合わせはこちらから</link-arrow>
          </contact>
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
          <blog>
            <text-normal
              >技術に関することや、日々の出来事をゆる〜く発信しています。</text-normal
            >
            <link-arrow href="/">Blogはこちらから</link-arrow>
          </blog>
        </div>
        <!-- ./l-section-inner -->
      </section>
      <!-- ./l-section -->
    </the-main>
    <the-bread-crumb :bread-crumb-title="heading1"></the-bread-crumb>
    <modal-gallery
      :modal-data="galleryDatas[modalId]"
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
export default {
  data() {
    return {
      show: false,
      modalId: 0,
      addClassData: [],
      heading1: 'ぱくもぐブログを管理している人',
      heading1Sub: 'ぱくもぐブログ管理人の自己紹介ページです。',
    }
  },
  computed: {
    tableDatas() {
      const tableDatas = [
        {
          tableHeader: 'エリア',
          tableCellData: '沖縄',
        },
        {
          tableHeader: '経歴',
          tableCellData: '専門学校講師→Web制作会社',
        },
        {
          tableHeader: '趣味',
          tableCellData: '食べ飲み歩き・映画を見る',
        },
      ]
      return tableDatas
    },
    SkillDatas() {
      const SkillDatas = [
        {
          skillName: 'html',
          skillIconPath: require('@/assets/img/icon/icon_html.svg'),
          skillValue: '100%',
        },
        {
          skillName: 'css',
          skillIconPath: require('@/assets/img/icon/icon_css.svg'),
          skillValue: '80%',
        },
        {
          skillName: 'jquery',
          skillIconPath: require('@/assets/img/icon/icon_jquery.svg'),
          skillValue: '70%',
        },
        {
          skillName: 'javascript',
          skillIconPath: require('@/assets/img/icon/icon_js.svg'),
          skillValue: '50%',
        },
        {
          skillName: 'photoshop',
          skillIconPath: require('@/assets/img/icon/icon_ps.svg'),
          skillValue: '60%',
        },
        {
          skillName: 'xd',
          skillIconPath: require('@/assets/img/icon/icon_xd.svg'),
          skillValue: '70%',
        },
        {
          skillName: 'git',
          skillIconPath: require('@/assets/img/icon/icon_git.svg'),
          skillValue: '70%',
        },
        {
          skillName: 'gulp',
          skillIconPath: require('@/assets/img/icon/icon_gulp.svg'),
          skillValue: '60%',
        },
      ]
      return SkillDatas
    },
    serviceDatas() {
      const serviceDatas = [
        {
          serviceTitle: 'コーディング',
          serviceImg: require('@/assets/img/icon/icon_pc.svg'),
          serviceBody:
            'HTML/CSS、jQuery、javascriptによるコーディングを行います。<br>ワイヤーフレームに沿ってHTMLの文書構造に沿い、再利用性・メンテナンス性が高いCSS設計を行います。',
        },
        {
          serviceTitle: 'SEO対策',
          serviceImg: require('@/assets/img/icon/icon_seo.svg'),
          serviceBody: '検索順位を高めるSEO対策を行います。',
        },
        {
          serviceTitle: 'コミュニケーション',
          serviceImg: require('@/assets/img/icon/icon_communication.svg'),
          serviceBody:
            'チャット、オンラインMTGを密に行い、認識齟齬が無いようにお仕事を進めていきます。',
        },
      ]
      return serviceDatas
    },
    galleryDatas() {
      const galleryDatas = [
        {
          galleryImg: require('@/assets/img/icon/icon_middle.png'),
          galleryModalImg: require('@/assets/img/icon/icon_middle.png'),
          galleryModalTitle: 'タイトル1',
          galleryModalBody: '実績掲載は準備中です。。',
        },
        {
          galleryImg: require('@/assets/img/icon/icon_middle.png'),
          galleryModalImg: require('@/assets/img/icon/icon_middle.png'),
          galleryModalTitle: 'タイトル2',
          galleryModalBody: '実績掲載は準備中です。。',
        },
      ]
      return galleryDatas
    },
  },
  mounted() {
    // スキルのclass付与
    let skillItemElems = []
    skillItemElems = this.$refs.skillItemsDom
    skillItemElems.forEach((elem, index) => {
      this.addClassData.push('is-progress-' + elem.$el.firstElementChild.id)
    })
    return this.addClassData
  },
  methods: {
    modalOpen(key) {
      this.show = true
      this.modalId = key
    },
    modalClose(close) {
      this.show = close
    },
    modalLayerClose() {
      this.show = false
    },
  },
  head() {
    return {
      title: `${this.heading1}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `沖縄在住Webコーダーのぱくもぐブログ兼ポートフォリオサイト、${this.heading1}ページです。これまでのHTML、CSS、javascriptの経験・実績、日々の暮らしなどを紹介します。`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `沖縄在住Webコーダーのぱくもぐブログ兼ポートフォリオサイト、${this.heading1}ページです。これまでのHTML、CSS、javascriptの経験・実績、日々の暮らしなどを紹介します。`,
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
