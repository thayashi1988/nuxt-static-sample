<template>
  <div>
    <the-main :title="heading1" :sub-title="heading1Sub">
      <section class="l-section">
        <div class="l-section-inner is-fadein">
          <div class="l-contact">
            <the-contact>
              <template #formparts>
                <form-input
                  v-for="(formData, key) in formParts"
                  :key="key"
                  :id="formData.id"
                  :type="formData.type"
                  :autocomplete="formData.autocomplete"
                  >{{ formData.label }}</form-input
                >
                <form-text-area :id="formPartsTextArea.id">{{
                  formPartsTextArea.label
                }}</form-text-area>
              </template>
              <template #formspam>
                <div v-show="false" class="p-contact__item">
                  <label for="message">スパムでない場合は空欄</label>
                  <input v-model="botField" type="text" name="bot-field" />
                </div>
                <!-- /.p-contact__item -->
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

  <!-- <div class="container">
    <div>
      <select id="selectA" ref="select1" name="select" @change="getValue(1)">
        <option
          v-for="(item, key) in test"
          :key="key"
          :value="item.value"
          :selected="flag_a === item.value"
        >
          {{ item.value }}
        </option>
      </select>
      <select id="selectB" ref="select2" name="select" @change="getValue(2)">
        <option
          v-for="(item, key) in test"
          :key="key"
          :value="item.value"
          :selected="flag_b === item.value"
        >
          {{ item.value }}
        </option>
      </select>
    </div>
    <div class="flex mt-20">
      <form class="w-full" name="contact" method="POST" data-netlify="true">
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  </div> -->
</template>
<script>
import FormTextArea from '~/components/portfolio/ui/form/FormTextArea.vue'
const aaa = []
let ccc = []
let duplicateFlag = false
let pushNum = 0

export default {
  components: { FormTextArea },
  data() {
    return {
      heading1: 'お問い合わせ',
      heading1Sub: 'お仕事の依頼・技術的相談などお気軽にご連絡ください。',
      formParts: [
        {
          type: 'text',
          id: 'username',
          autocomplete: 'name',
          label: 'お名前',
        },
        {
          type: 'text',
          id: 'usernamekana',
          autocomplete: 'namekana',
          label: 'フリガナ',
        },
        {
          type: 'text',
          id: 'usermailadress',
          autocomplete: 'usermailadress',
          label: 'メールアドレス',
        },
      ],
      formPartsTextArea: {
        id: 'textarea',
        label: 'お問い合わせ内容',
      },
      test: [
        {
          value: 'あああ',
        },
        {
          value: 'いいい',
        },
        {
          value: 'ううう',
        },
      ],
      aaa: [
        {
          1: 'あああ',
        },
        {
          2: 'いいい',
        },
        {
          3: 'ううう',
        },
      ],
      flag_a: 'いいい',
      flag_b: 'ううう',
      select: [],
    }
  },
  computed: {},
  methods: {
    getValue(index) {
      // console.log(this.$refs["select" + index].getAttribute("id"));
      // console.log(aaa.length);

      const bbb = this.$refs['select' + index].getAttribute('id')
      if (aaa.length > 0) {
        for (let i = 0; i < aaa.length; i++) {
          for (let num = 0; num < aaa.length; num++) {
            ccc = []
            ccc = Object.keys(aaa[num])
            // console.log(bbb)
            if (ccc[0] === bbb) {
              duplicateFlag = true
              pushNum = num
              break
            }
          }
          if (duplicateFlag) {
            console.log('同じ値がある')
            aaa[pushNum][bbb] = this.$refs['select' + index].value
            duplicateFlag = false
            break
          } else {
            console.log('同じ値がないっすすす')
            aaa.push({ [bbb]: this.$refs['select' + index].value })
            duplicateFlag = false
          }
        }
      } else {
        // 最初の選択のみ発火
        aaa.push({ [bbb]: this.$refs['select' + index].value })
      }

      console.log(aaa)
    },
  },
}
</script>
