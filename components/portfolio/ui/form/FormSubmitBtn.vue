<template>
  <div class="m-ac m-mt-30">
    <button type="submit" class="m-btn" :data-width="dataWidth">
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
  },
}
</script>
