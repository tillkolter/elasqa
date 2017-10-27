<template>
  <div class="elastic-indices" v-if="elasticIndices.length > 0">
    <table>
      <tr><th>Health</th><th>Name</th><th>Replicas</th><th>Count</th><th>Size</th><th>Status</th></tr>
      <tr @click="onSelectIndex(index)" :class="['elastic-index-summary', index.status]" v-for="index in elasticIndices">
        <td :class="['health', index.health]"></td>
        <td class="index-name">{{index.index}}</td>
        <td class="index-replicas">{{index.rep}}</td>
        <td class="count">{{index['docs.count']}}</td>
        <td class="size">{{getFilesize(index['store.size'])}}</td>
        <td class="status">{{index.status}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  var filesize = require('filesize')
  export default {
    name: 'ElasticIndices',
    computed: {
      ...mapGetters(['elasticIndices'])
    },
    methods: {
      getFilesize (bytes) {
        return filesize(bytes)
      },
      onSelectIndex (index) {
        this.$store.commit('SET_ELASTIC_INDEX', index)
      }
    }
  }
</script>

<style lang="scss">
  .elastic-index-summary {
    margin-top: $global-margin;
    .health {
      width: 16px;
      height: 16px;
      &.yellow {
        background-color: yellow;
      }
    }
    &.closed {
      position: relative;
      &:after {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }
  .elastic-indices {
    width: 100%;
    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0px !important;
    }
    td {
      text-align: center;
      padding: $global-padding;
      background-color: #fff;
      color: $brand-color-dark;
    }
    tr {
      &:hover {
        td {
          cursor: pointer;
          background-color: $green-color-4;
        }
      }
    }
    th {
      background-color: $brand-color-dark;
      color: #fff;
      padding: $global-padding;
    }
  }
</style>