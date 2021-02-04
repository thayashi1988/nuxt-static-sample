<template>
  <dl class="m-contact-item">
    <dd class="m-contact-item-label">
      <label for="detail"><slot></slot></label>
    </dd>
    <dt class="m-contact-item-parts">
      <textarea
        id="detail"
        name="detail"
        @input="$emit('input', $event.target.value)"
      />
    </dt>
  </dl>
</template>
<script>
export default {
  name: 'FormTextArea',
  props: {
    detailModel: {
      type: String,
      default: '',
    },
  },
}
</script>
