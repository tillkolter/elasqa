<template>
  <nav class="main-nav">
    <router-link class="menu-item" to="/elastic">Elastic</router-link>
    <router-link class="menu-item" to="/corpus">Corpus Manager</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'MainNavigation'
  }
</script>

<style lang="scss">
  .main-nav {
    height: 56px
  }
  .menu-item {
    padding: 2 * $global-padding;
    border-radius: $border-radius;
    background-color: $green-color-2;
    color: $brand-color-dark;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      background-color: $brand-color-peach-hover;
    }
  }
  .router-link-active {
    background-color: $brand-color-peach;
  }
</style>