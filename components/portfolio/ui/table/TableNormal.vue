<template>
  <div class="l-table">
    <table class="m-table">
      <colgroup>
        <col class="m-w-30" />
        <col class="m-w-70" />
      </colgroup>
      <tbody>
        <slot></slot>
      </tbody>
    </table>
    <!-- ./m-table -->
  </div>
  <!-- ./l-table -->
</template>
<script>
export default {
  name: 'TableNormal',
}
</script>
