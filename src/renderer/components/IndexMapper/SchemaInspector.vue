<template>
  <div>
    <h2>Database Schema</h2>
    <div class="schema-view">
      <template v-for="table in databaseTableSchemas">
        <div class="database-schema">
          <div class="database-schema__tablename" @click="toggleExpanded(table.tableName)">{{table.tableName}}</div>
          <div class="database-schema__details" v-show="table.showDetails">
            <div class="database-schema__feature" @click="selectFeature(table.tableName, feature, table.features[feature])"
                 v-for="feature in Object.keys(table.features)">
              <strong v-if="table.features[feature].primary">{{feature}}: [{{table.features[feature].type}}]</strong>
              <span v-else>{{feature}} [{{table.features[feature].type}}]</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'SchemaInspector',
    computed: {
      ...mapGetters(['databaseTableSchemas'])
    },
    methods: {
      parseFeatures (table) {
        let any = JSON.parse(table.features)
        return any
      },
      toggleExpanded (tableName) {
        this.$store.commit('TOGGLE_DB_TABLE_SHOW_DETAILS', tableName)
      },
      selectFeature (table, feature, attributes) {
        this.$store.commit('ADD_INDEX_DATABASE_FIELD', {table: table, name: feature, attrs: attributes})
      }
    }
  }
</script>
