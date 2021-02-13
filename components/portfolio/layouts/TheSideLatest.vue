<template>
  <div class="l-box">
    <div class="l-box-inner">
      <p class="m-box-ttl">最新記事</p>
      <ul class="m-box-list">
        <slot></slot>
      </ul>
    </div>
  </div>
  <!-- ./l-box -->
</template>
<script>
export default {
  name: 'TheSideLatest',
}
</script>
