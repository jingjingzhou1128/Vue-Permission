<template>
  <div @click="toggleClick">
    <span :class="[isShrink ? 'is-shrink icon-zhankai' : 'icon-shousuo']" class="hamburger iconfont"></span>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isShrink: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
