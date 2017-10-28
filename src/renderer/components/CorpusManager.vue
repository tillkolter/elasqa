<template>
  <div>
    <div class="title">Query Sheet</div>
    <div id="query-station">
      <query-panel></query-panel>
      <results-list></results-list>
    </div>
  </div>
</template>

<script>
  import QueryPanel from './QueryPanel'
  import ResultsList from './ResultsList'
  export default {
    components: {ResultsList, QueryPanel},
    name: 'CorpusManager'
  }
</script>

<style lang="scss">
  #query-station {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
</style>
