<template>
  <div class="l-box">
    <div class="l-box-inner">
      <p class="m-box-ttl">プロフィール</p>
      <div class="m-box-profile">
        <p class="m-box-label">管理人：じぃ</p>
        <img src="~/assets/img/icon/icon_small.png" alt="じぃ" />
      </div>
      <slot></slot>
    </div>
  </div>
  <!-- ./l-box -->
</template>
<script>
export default {
  name: 'TheSideProfile',
}
</script>
