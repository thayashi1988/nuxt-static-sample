<template>
  <div>
    <dl class="m-contact-item">
      <dd class="m-contact-item-label">
        <label :for="id"><slot></slot></label>
      </dd>
      <dt class="m-contact-item-parts">
        <input
          :type="type"
          :id="id"
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
