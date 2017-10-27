<template>
  <div id="result-list">
    <div class="results" v-for="(result, i) in resultsHistory">
      <query-item :query="getQuery(i)"></query-item>
      <results-item :results="result"></results-item>
    </div>
  </div>
</template>

<script>
  import ResultsItem from './ResultsList/ResultsItem'
  import {mapGetters} from 'vuex'
  import QueryItem from './QueryList/QueryItem'
  export default {
    components: {QueryItem, ResultsItem},
    name: 'ResultsList',
    computed: {
      ...mapGetters(['resultsHistory'])
    },
    methods: {
      getQuery (index) {
        return this.$store.state.QueryList.history[index]
      }
    }
  }
</script>

<style lang="scss">

  #result-list {
    display: flex;
    flex-direction: column;
    width: 560px;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 16px;
    margin-left: 8px;
    margin-right: 8px;
  }

  .results {
    margin-bottom: 8px;
    max-height: 120px;
    background-color: $brand-color-peach;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-shadow: 4px 4px 2px -2px rgba(0,0,0,0.75);
    -moz-box-shadow: 4px 4px 2px -2px rgba(0,0,0,0.75);
    box-shadow: 4px 4px 2px -2px rgba(0,0,0,0.75);
    &:after {
      margin-bottom: inherit;
    }
    &:hover {
      background-color: $brand-color-peach-hover;
      cursor: pointer;
    }
  }
</style>
