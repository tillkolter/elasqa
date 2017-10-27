<template>
  <div id="app">
    <div id="wrapper">
    <main-navigation></main-navigation>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import MainNavigation from './components/MainNavigation'
  export default {
    components: {MainNavigation},
    name: 'elasqa'
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background-color: $green-color-5;
    height: 100%;
    padding: 60px 80px;
    width: 100vw;
  }

  /* CSS */
</style>
