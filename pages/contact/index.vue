<template>
  <div>
    <the-main :title="heading1" :sub-title="heading1Sub">
      <section class="l-section">
        <div class="l-section-inner is-fadein">
          <div class="l-contact">
            <the-contact>
              <template #formparts>
                <validation-provider
                  v-slot="{ errors }"
                  rules="required|max:100"
                  name="お名前"
                >
                  <form-input-name v-model.trim="nameModel"
                    >お名前</form-input-name
                  >
                  <p v-show="errors.length" class="p-contact__error">
                    {{ errors[0] }}
                  </p>
                </validation-provider>
                <!-- <form-input-kana v-model.trim="nameKanaModel"
                  >フリガナ</form-input-kana
                > -->
                <form-input-mail v-model.trim="mailModel"
                  >メールアドレス</form-input-mail
                >
                <form-text-area v-model.trim="textareamodel"
                  >お問い合わせ内容</form-text-area
                >
              </template>
              <template #formspam>
                <!-- <div v-show="false" class="p-contact__item">
                  <label for="message">スパムでない場合は空欄</label>
                  <input v-model="botField" type="text" name="bot-field" />
                </div> -->
              </template>
              <template #formbtn>
                <form-submit-btn data-width="middle">送信</form-submit-btn>
              </template>
            </the-contact>
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
      nameModel: '',
      nameKanaModel: '',
      mailModel: '',
      textareamodel: '',
      heading1: 'お問い合わせ',
      heading1Sub: 'お仕事の依頼・技術的相談などお気軽にご連絡ください。',
    }
  },
  computed: {},
  methods: {},
}
</script>
