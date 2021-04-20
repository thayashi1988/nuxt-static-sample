<template>
  <footer class="l-footer">
    <div class="l-footer-inner">
      <p class="m-copy">
        Copyright &copy; 2021 ~ {{ getCurrentYear }}pakumoguBlog
      </p>
    </div>
    <!-- ./l-footer-inner -->
  </footer>
  <!-- ./l-footer -->
</template>
<script>
export default {
  name: 'TheFooter',
  computed: {
    getCurrentYear() {
      const currentYear = new Date().getFullYear()
      return currentYear
    },
  },
}
</script>
