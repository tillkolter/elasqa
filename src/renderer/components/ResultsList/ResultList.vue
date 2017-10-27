<template>
  <div>
    <div v-for="result in currentResults">{{JSON.stringify(result)}}</div>
  </div>
</template>

<script>
  export default {
    name: 'ResultList',
    computed: {
      currentResults () {
        return this.$store.getters.currentResults
      }
    }
  }
</script>
