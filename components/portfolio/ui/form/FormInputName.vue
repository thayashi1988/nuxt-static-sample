<template>
  <dl class="m-contact-item">
    <dd class="m-contact-item-label">
      <label for="name"><slot></slot></label>
    </dd>
    <dt class="m-contact-item-parts">
      <input
        id="name"
        type="text"
        name="name"
        autocomplete="autocomplete"
        @input="$emit('input', $event.target.value)"
      />
    </dt>
  </dl>
</template>
<script>
export default {
  name: 'FormInputName',
  props: {
    nameModel: {
      type: String,
      default: '',
    },
  },
}
</script>
