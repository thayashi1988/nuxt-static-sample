<template>
  <dl class="m-contact-item">
    <dd class="m-contact-item-label">
      <label for="email"><slot></slot></label>
    </dd>
    <dt class="m-contact-item-parts">
      <input
        id="email"
        type="text"
        name="email"
        @input="$emit('input', $event.target.value)"
      />
    </dt>
  </dl>
</template>
<script>
export default {
  name: 'FormInputMail',
  props: {
    mailModel: {
      type: String,
      default: '',
    },
  },
}
</script>
