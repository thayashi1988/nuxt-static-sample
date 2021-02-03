<template>
  <div class="l-contact">
    <form
      class="l-contact"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="onSubmit"
    >
      <input type="hidden" name="form-name" value="contact" />
      <dl class="m-contact-item">
        <slot name="formparts"></slot>
      </dl>
      <slot name="formspam"></slot>
      <slot name="formbtn"></slot>
    </form>
  </div>
</template>
<script>
export default {
  name: 'TheContact',
}
</script>
