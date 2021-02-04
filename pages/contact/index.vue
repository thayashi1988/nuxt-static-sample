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
              data-netlify="true"
              netlify
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />

              <the-contact>
                <template #formparts>
                  <form-input-name
                    v-model.trim="nameModel"
                    rules="required"
                    name="お名前"
                    >お名前</form-input-name
                  >
                  <form-input-kana
                    v-model.trim="nameKanaModel"
                    rules="required|katakana"
                    name="フリガナ"
                    >フリガナ</form-input-kana
                  >
                  <form-input-kana
                    v-model.trim="mailModel"
                    rules="required|email"
                    name="メールアドレス"
                    >メールアドレス</form-input-kana
                  >
                  <form-text-area v-model.trim="textareaModel"
                    >お問い合わせ内容</form-text-area
                  >
                </template>
                <template #formspam>
                  <div v-show="false" class="p-contact__item">
                    <label for="message">スパムでない場合は空欄</label>
                    <input v-model="botField" type="text" name="bot-field" />
                  </div>
                </template>
                <template #formbtn>
                  <form-submit-btn
                    data-width="middle"
                    :classes="{ 'is-disable': invalid || !validated }"
                    :disabled="invalid || !validated"
                    >送信</form-submit-btn
                  >
                </template>
              </the-contact>
            </validation-observer>
            <!-- <heading-2>{{ completeMessage }}</heading-2> -->
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
  methods: {
    onSubmit() {
      alert('aaaaaaa')
      //   if (this.isSending) {
      //     return
      //   }
      //   this.isSending = true
      //   this.completeMessage = '送信処理中…'
      //   const params = new URLSearchParams()
      //   params.append('form-name', 'contact')
      //   params.append('name', this.nameModel)
      //   params.append('nameKana', this.nameKanaModel)
      //   params.append('mail', this.mailModel)
      //   params.append('detail', this.textareaModel)
      //   if (this.botField) {
      //     params.append('bot-field', this.botField)
      //   }
      //   this.$axios
      //     .$post('/', params)
      //     .then(() => {
      //       this.completeMessage = 'お問い合わせを送信しました！'
      //       this.resetForm()
      //       this.isSubmit = true
      //     })
      //     .catch(() => {
      //       this.completeMessage = 'お問い合わせの送信が失敗しました'
      //       this.isError = true
      //     })
      //     .finally(() => {
      //       this.isSending = false
      //     })
      // },
      // resetForm() {
      //   this.username = ''
      //   this.katakana = ''
      //   this.useremail = ''
      //   this.message = ''
      //   this.isError = false
      //   this.$refs.observer.reset()
    },
  },
}
</script>
