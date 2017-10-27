<template>
  <div class="elastic-index" v-if="indexMapping">
    <div class="name">{{index.index}}</div>
    <pre>{{JSON.stringify(indexMapping, null, 2)}}</pre>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'ElasticIndex',
    props: ['index'],
    data () {
      return {
        indexMapping: undefined
      }
    },
    computed: {
      ...mapGetters(['elasticClient'])
    },
    mounted () {
      let vm = this
      this.elasticClient.indices.getMapping({index: this.index.index}, function (x, resp) {
        vm.indexMapping = resp
      })
    }
  }
</script>

<style lang="scss">
  .elastic-index {
    padding: $global-padding;
    width: 100%;
  }
</style>