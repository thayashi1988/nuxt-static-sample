<template>
  <div class="l-contact">
    <validation-observer
      ref="observer"
      tag="form"
      class="l-contact"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="onSubmit"
    >
      <input type="hidden" name="form-name" value="contact" />
      <slot name="formparts"></slot>
      <slot name="formspam"></slot>
      <slot name="formbtn"></slot>
    </validation-observer>
  </div>
</template>
<script>
export default {
  name: 'TheContact',
}
</script>
