<template>
  <div id="query-form">
    <form @submit.prevent="onSubmit">
      <input type="submit" value="Run Query">
    </form>
    <textarea id="query-panel" name="query" v-model="query" form="query-panel"></textarea>
  </div>
</template>

<script>
  import {query} from '../store/database'
  export default {
    name: 'QueryPanel',
    data () {
      return {
        query: 'SELECT * FROM artikel LIMIT 1'
      }
    },
    methods: {
      onSubmit () {
        let vue = this
        query(this.query, function (error, results, fields) {
          console.log('response')
          if (error) throw error
          console.log(JSON.stringify(results))
          vue.$store.commit('ADD_QUERY', vue.query)
          vue.$store.commit('ADD_RESULT', results)
        })
      }
    }
  }
</script>

<style lang="scss">
  #query-panel {
    /*width: 50%;*/
    height: 240px;
  }

</style>
