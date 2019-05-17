<template>
  <div>
    Menu2
    <ul>
      <li class="link"><router-link :to="{name: 'Menu2-menu2-menu1'}">view menu1</router-link></li>
      <li class="link"><router-link :to="{name: 'Menu2-menu2-menu2'}">view menu2</router-link></li>
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
.link {
  color: #1782d4;
  text-decoration: underline;
}
</style>
