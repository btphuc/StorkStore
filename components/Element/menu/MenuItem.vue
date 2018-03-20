<template>
  <li :class="{'active': isActive}">
    <nuxt-link :to="to">{{title}}</nuxt-link>
    <ul v-if="subMenu" class="sub-menu">
      <slot></slot>
    </ul>
  </li>
</template>

<script>

export default {
  props: {
    isActive : Boolean,
    title: String,
    to: {
      url : String | Object,
      default () {
        return ''
      }
    },
    subMenu: Boolean
  }
}

</script>

<style scoped>

</style>

