<template>
  <div>
      <div v-for="query in queryHistory">
        {{JSON.stringify(query)}}
      </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'QueryList',
    computed: {
      ...mapGetters(['queryHistory'])
    }
  }
</script>