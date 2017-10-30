<template>
  <div>
    <form @submit.prevent="onTestConnection">
      <input placeholder="Elastic Host" v-model="elasticHost"/>
      <input placeholder="Elastic Post" v-model="elasticPort"/>
      <input type="submit" value="Test Connection" />
    </form>
    <div class="index-viewer">
      <elastic-indices></elastic-indices>
      <elastic-index v-if="currentElasticIndex" :index="currentElasticIndex"></elastic-index>
      <index-mapper></index-mapper>
    </div>
  </div>
</template>

<script>
  import ElasticIndices from './ElasticManager/ElasticIndices'
  import ElasticIndex from './ElasticManager/ElasticIndex'
  import { mapGetters } from 'vuex'
  import SchemaInspector from './IndexMapper/SchemaInspector'
  import IndexMapper from './IndexMapper'
  export default {
    components: {IndexMapper, SchemaInspector, ElasticIndex, ElasticIndices},
    name: 'ElasticManager',
    data () {
      return {
        elasticHost: '',
        elasticPort: ''
      }
    },
    computed: {
      ...mapGetters(['currentElasticIndex', 'databaseTableSchemas'])
    },
    methods: {
      onTestConnection () {
        this.$store.dispatch('testElasticConnection')
      }
    },
    mounted () {
      this.elasticHost = this.$store.state.ElasticManager.elasticHost
      this.elasticPort = this.$store.state.ElasticManager.elasticPort
      this.$store.dispatch('loadTableSchemas')
    }
  }
</script>

<style>
  .index-viewer {
    display: flex;
    flex-direction: row;
  }
</style>
