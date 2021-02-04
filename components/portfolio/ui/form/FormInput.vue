<template>
  <div>
    <dl class="m-contact-item">
      <dd class="m-contact-item-label">
        <label :for="id"><slot></slot></label>
      </dd>
      <dt class="m-contact-item-parts">
        <input
          :id="id"
          :type="type"
          :name="id"
          :autocomplete="autocomplete"
          @input="$emit('input', $event.target.value)"
        />
      </dt>
    </dl>
  </div>
</template>
<script>
export default {
  name: 'FormInput',
  props: {
    type: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    autocomplete: {
      type: String,
      default: '',
    },
  },
}
</script>
