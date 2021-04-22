<template>
  <validation-provider v-slot="{ errors }" tag="dl" class="m-contact-item" :rules="rules" :name="name">
    <dd class="m-contact-item-label">
      <label for="namekana"><slot></slot><span class="m-contact-item-important">※入力必須</span></label>
    </dd>
    <dt class="m-contact-item-parts">
      <input id="namekana" v-model.trim="innerValue" type="text" name="namekana" required />
      <p v-show="errors.length" class="m-contact-validate-error">
        {{ errors[0] }}
      </p>
    </dt>
  </validation-provider>
</template>
<script>
export default {
  name: 'FormInputKana',
  props: {
    nameKanaModel: {
      type: String,
      default: '',
    },
    rules: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      required: true,
    },
  },
  computed: {
    innerValue: {
      get() {
        return this.$props.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>
