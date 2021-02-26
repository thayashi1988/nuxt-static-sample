<template>
  <span class="m-label">{{ tagName }}</span>
</template>

<script>
export default {
  name: 'CardTag',
  props: {
    tagName: {
      type: String,
      default: '',
    },
  },
}
</script>
