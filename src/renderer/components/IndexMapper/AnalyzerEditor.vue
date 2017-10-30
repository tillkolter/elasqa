<template>
  <div v-if="currentElasticAnalyzer">
    <h3>Analyzer: <code>{{currentElasticAnalyzer.id}}</code></h3>
    <div v-if="currentElasticAnalyzer.description">{{currentElasticAnalyzer.description}}</div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'AnalyzerEditor',
    computed: {
      ...mapGetters(['currentElasticAnalyzer'])
    }
  }
</script>
