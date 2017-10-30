<template>
  <div class="query-item">{{query}}</div>
</template>

<script>
  export default {
    name: 'QueryItem',
    props: ['query']
  }
</script>

<style lang="scss">
  .query-item {
    padding: 0 $global-padding;
    background-color: $brand-color-dark;
    color: $brand-color-peach;
    height: 32px;
    line-height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
