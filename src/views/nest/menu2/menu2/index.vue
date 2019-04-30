<template>
  <div>
    Menu2
    <ul>
      <li><router-link :to="{name: 'Menu2-menu2-menu1'}">menu1</router-link></li>
      <li><router-link :to="{name: 'Menu2-menu2-menu2'}">menu2</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'nestMenu2Menu2'
}
</script>

<style lang="scss" scoped>

</style>
