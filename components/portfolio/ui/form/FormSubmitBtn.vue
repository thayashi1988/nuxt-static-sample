<template>
  <div class="m-ac m-mt-30">
    <button type="submit" class="m-btn" :class="classes" :data-width="dataWidth" :disabled="disabled">
      <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
  name: 'FormSubmitBtn',
  props: {
    dataWidth: {
      type: String,
      default: '',
    },
    classes: {
      type: Object,
      default: () => {},
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
