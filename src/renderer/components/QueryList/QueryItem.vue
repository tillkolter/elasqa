<template>
  <div class="query-item">{{JSON.stringify(query)}}</div>
</template>

<script>
  export default {
    name: 'QueryItem',
    props: ['query']
  }
</script>

<style lang="scss">
  .query-item {
    padding: $global-padding;
    background-color: $brand-color-dark;
    color: $brand-color-peach;
  }
</style>
