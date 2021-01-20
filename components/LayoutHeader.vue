<template>
  <header class="w-full absolute md:static bg-black px-2 py-2 z-50">
    <div class="md:max-w-3xl mx-auto md:flex md:items-center">
      <div
        class="w-full md:flex mx-auto px-6 md:px-0 flex justify-between items-center h-16"
      >
        <h1>
          <nuxt-link
            class="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap"
            to="/"
          >
            MdN Cafe
          </nuxt-link>
        </h1>
        <div class="text-white md:hidden">
          <button class="focus:outline-none" @click="isOpen = !isOpen">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                v-show="!isOpen"
                d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
              />
              <path
                v-show="isOpen"
                d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav
        class="w-full md:block absolute left-0 md:static bg-black md:bg-none z-20 transition-all duration-300 ease-in"
        :class="isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'"
      >
        <ul class="md:flex md:justify-end md:items-end">
          <li class="w-full md:w-auto md:ml-5">
            <nuxt-link
              to="/concept"
              class="text-white md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full"
              @click.native.prevent="menuTrigger"
              >コンセプト</nuxt-link
            >
          </li>
          <li class="w-full md:w-auto md:ml-5">
            <nuxt-link
              to="/shop"
              class="text-white md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full"
              @click.native.prevent="menuTrigger"
              >店舗情報</nuxt-link
            >
          </li>
          <li class="w-full md:w-auto md:ml-5">
            <nuxt-link
              to="/menu"
              class="text-white md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full"
              @click.native.prevent="menuTrigger"
              >メニュー</nuxt-link
            >
          </li>
          <li class="w-full md:w-auto md:ml-5">
            <nuxt-link
              to="/information"
              class="text-white md:block inline-block md:py-0 py-5 px-5 md:px-0 w-full"
              @click.native.prevent="menuTrigger"
              >お知らせ</nuxt-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: 'LayoutHeader',
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    menuTrigger() {
      if (this.isOpen) {
        this.isOpen = false
        this.$router.push({ path: event.target.pathname })
      } else {
        this.$router.push({ path: event.target.pathname })
      }
    },
  },
}
</script>
