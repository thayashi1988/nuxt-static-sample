<template>
  <div class="l-contact">
    <slot name="formparts">
      <input type="hidden" name="form-name" value="contact" />
    </slot>
    <slot name="formspam"></slot>
    <slot name="formbtn"></slot>
  </div>
</template>
<script>
export default {
  name: 'TheContact',
}
</script>
