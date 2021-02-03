<template>
  <validation-provider
    v-slot="{ errors }"
    tag="dl"
    class="m-contact-item"
    rules="required|katakana"
    name="フリガナ"
  >
    <dd class="m-contact-item-label">
      <label for="namekana"><slot></slot></label>
    </dd>
    <dt class="m-contact-item-parts">
      <input
        id="namekana"
        type="text"
        name="namekana"
        @input="$emit('input', $event.target.value)"
      />
      <p v-show="errors.length" class="p-contact__error">
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
  },
}
</script>
