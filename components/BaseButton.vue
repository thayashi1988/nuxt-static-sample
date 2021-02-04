<template>
  <div :class="`mb-10 mx-auto ${classPosition}`">
    <nuxt-link
      :to="link"
      :class="`font-semibold md:text-lg xl:text-base px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 leading-tight shadow-md ${classShape} ${classBackgroundColor} ${classBackgroundHoverColor} ${classTextColor}`"
      >{{ name }}
      <slot />
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'BaseButton',
  props: {
    name: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    classPosition: {
      type: String,
      default: 'text-center',
    },
    classShape: {
      type: String,
      default: 'rounded-lg',
    },
    classBackgroundColor: {
      type: String,
      default: 'bg-white',
    },
    classBackgroundHoverColor: {
      type: String,
      default: 'hover:bg-gray-200',
    },
    classTextColor: {
      type: String,
      default: 'text-gray-800',
    },
  },
}
</script>
