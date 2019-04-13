<template>
  <div @click="toggleClick">
    <span :class="[isShrink ? 'is-shrink icon-zhankai' : 'icon-shousuo']" class="hamburger iconfont"></span>
  </div>
</template>

<script>
export default {
  name: 'hamburger',
  props: {
    isShrink: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  },
  created () {
    console.log(this.isShrink)
  }
}
</script>

<style lang="scss" scoped>

</style>
