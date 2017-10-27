<template>
  <div id="result-list">
    <div v-for="(result, i) in resultsHistory">
      <div>
        <query-item :query="getQuery(i)"></query-item>
        <result-item :results="result"></result-item>
      </div>
    </div>
  </div>
</template>

<script>
  import ResultItem from './ResultsList/ResultList'
  import {mapGetters} from 'vuex'
  import QueryItem from './QueryList/QueryItem'
  export default {
    components: {QueryItem, ResultItem},
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

<style>
  #result-list {
    /*width: 50%;*/
    display: flex;
    flex-direction: row;
    width: 560px;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 16px;
    margin-left: 8px;
    margin-right: 8px;
  }
</style>
