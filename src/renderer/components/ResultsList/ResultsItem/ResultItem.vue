<template>
  <div class="result-item">
    {{JSON.stringify(result)}}
  </div>
</template>

<script>
  export default {
    name: 'ResultItem',
    props: ['result']
  }
</script>

<style lang="scss">
  .result-item {
    padding: $global-padding;

  }
</style>
