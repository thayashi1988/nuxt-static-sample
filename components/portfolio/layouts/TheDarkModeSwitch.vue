<template>
  <div class="l-toggle-darmode">
    <div class="js-toggle-darmode">
      <input
        id="toggleMode"
        v-model="toggleDarkmode"
        type="checkbox"
        name="toggleMode"
        class="js-toggle-darmode-checkbox"
        tabindex="0"
        @change="handleSwitchDarkmode"
      />
      <label class="js-toggle-darmode-label" for="toggleMode"></label>
    </div>
    <p class="js-toggle-darmode-txt">
      <span class="m-hide-sp">今は、、<br /></span>{{ toggleDarkmode ? 'だーくもーど' : 'らいともーど' }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TheDarkModeSwitch',
  data() {
    return {
      toggleDarkmode: false,
    }
  },
  mounted() {
    // const osDark = window.matchMedia('(prefers-color-scheme: dark)')
    // function darkModeOn() {
    //   document.documentElement.classList.add('l-darkmode') // ルート要素<html>にクラスを追加
    // }
    // function darkModeOff() {
    //   document.documentElement.classList.remove('l-darkmode') // クラスの削除
    // }
    // const listener = (event) => {
    //   if (event.matches) {
    //     darkModeOn()
    //     this.toggleDarkmode = true
    //   } else {
    //     darkModeOff()
    //     this.toggleDarkmode = false
    //   }
    // }
    // osDark.addEventListener('change', listener)
    // listener(osDark)
  },
  methods: {
    handleSwitchDarkmode() {
      if (this.toggleDarkmode) {
        document.documentElement.classList.add('l-darkmode')
      } else {
        document.documentElement.classList.remove('l-darkmode')
      }
    },
  },
}
</script>
