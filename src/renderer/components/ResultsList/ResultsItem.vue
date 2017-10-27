<template>
  <div class="results-item">
    <result-item key="`result-${i}`" :result="result" v-for="(result, i) in currentResults"></result-item>
  </div>
</template>

<script>
  import ResultItem from './ResultsItem/ResultItem'
  export default {
    components: {ResultItem},
    name: 'ResultList',
    computed: {
      currentResults () {
        return this.$store.getters.currentResults
      }
    }
  }
</script>

<style lang="scss">
  .results-item {
    text-overflow: ellipsis;
    overflow: scroll;
    max-height: 120px;
  }
</style>