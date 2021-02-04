import Vue from 'vue'
Vue.directive('scroll', {
  inserted(el, binding) {
    const anime = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', anime)
      }
    }
    window.addEventListener('scroll', anime)
  },
})
