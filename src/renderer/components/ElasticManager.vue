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
    </div>
  </div>
</template>

<script>
  import ElasticIndices from './ElasticManager/ElasticIndices'
  import ElasticIndex from './ElasticManager/ElasticIndex'
  import { mapGetters } from 'vuex'
  export default {
    components: {ElasticIndex, ElasticIndices},
    name: 'ElasticManager',
    data () {
      return {
        elasticHost: '',
        elasticPort: ''
      }
    },
    computed: {
      ...mapGetters(['currentElasticIndex'])
    },
    methods: {
      onTestConnection () {
        this.$store.dispatch('testElasticConnection')
      }
    },
    mounted () {
      this.elasticHost = this.$store.state.ElasticManager.elasticHost
      this.elasticPort = this.$store.state.ElasticManager.elasticPort
    }
  }
</script>

<style>
  .index-viewer {
    display: flex;
    flex-direction: row;
  }
</style>
