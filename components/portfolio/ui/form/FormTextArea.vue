<template>
  <div>
    <dl class="m-contact-item">
      <dd class="m-contact-item-label">
        <label :for="id"><slot></slot></label>
      </dd>
      <dt class="m-contact-item-parts">
        <textarea :id="id" :name="id" />
      </dt>
    </dl>
  </div>
</template>
<script>
export default {
  name: 'FormTextArea',
}
</script>
