<template>
  <validation-provider
    v-slot="{ errors }"
    tag="dl"
    class="m-contact-item"
    :rules="rules"
    :name="name"
  >
    <dd class="m-contact-item-label">
      <label for="name"><slot></slot></label>
    </dd>
    <dt class="m-contact-item-parts">
      <input
        id="name"
        v-model.trim="innerValue"
        type="text"
        name="name"
        autocomplete="autocomplete"
        required
      />
      <p v-show="errors.length" class="m-contact-validate-error">
        {{ errors[0] }}
      </p>
    </dt>
  </validation-provider>
  <!-- <dl class="m-contact-item">
    <dd class="m-contact-item-label">
      <label for="name"><slot></slot></label>
    </dd>
    <dt class="m-contact-item-parts">
      <input
        id="name"
        type="text"
        name="name"
        autocomplete="autocomplete"
        required
        @input="$emit('input', $event.target.value)"
      />
    </dt>
  </dl> -->
</template>
<script>
export default {
  name: 'FormInputName',
  props: {
    nameModel: {
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
