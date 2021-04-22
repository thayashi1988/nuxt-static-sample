<template>
  <div>
    <the-main :title="heading1" :sub-title="heading1Sub">
      <section class="l-section">
        <div class="l-section-inner is-fadein">
          <div class="l-contact">
            <validation-observer
              ref="observer"
              v-slot="{ invalid, validated }"
              tag="form"
              name="contact"
              method="POST"
              action="/contact/thanks"
              data-netlify="true"
              netlify
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <form-input-name v-model.trim="nameModel" rules="required" name="お名前"> お名前 </form-input-name>
              <form-input-kana v-model.trim="nameKanaModel" rules="required|katakana" name="フリガナ">
                フリガナ
              </form-input-kana>
              <form-input-mail v-model.trim="mailModel" rules="required|email" name="メールアドレス">
                メールアドレス
              </form-input-mail>
              <form-text-area v-model.trim="textareaModel">お問い合わせ内容</form-text-area>
              <div v-show="false" class="p-contact__item">
                <label for="message">スパムでない場合は空欄</label>
                <input v-model="botField" type="text" name="bot-field" />
              </div>
              <form-submit-btn
                data-width="middle"
                :classes="{ 'is-disable': invalid || !validated }"
                :disabled="invalid || !validated"
              >
                送信
              </form-submit-btn>
            </validation-observer>
          </div>
        </div>
        <!-- ./l-section-inner -->
      </section>
      <!-- ./l-section -->
    </the-main>
    <the-bread-crumb :bread-crumb-title="heading1"></the-bread-crumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
      heading1: 'お問い合わせ',
      heading1Sub: 'お仕事の依頼・技術的相談などお気軽にご連絡ください。',
      nameModel: '',
      nameKanaModel: '',
      mailModel: '',
      textareaModel: '',
      botField: '',
      isSubmit: false,
      isSending: false,
      isError: false,
      completeMessage: '',
    }
  },
  computed: {
    sendingClass() {
      return {
        'is-sending': this.isSending,
        'is-error': this.isError,
        'is-complete': this.isSubmit,
      }
    },
  },
  // methods: {
  //   onSubmit() {
  //     alert('aaaaaaa')
  //   },
  // },
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
