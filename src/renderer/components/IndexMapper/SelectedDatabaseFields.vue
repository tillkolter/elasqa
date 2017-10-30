<template>
  <div>
    <h2>Elastic Mapping</h2>
    <div class="schema-view selected-fields">
      <div class="database-schema" v-for="table in Object.keys(currentElasticMapping)">
        <div class="database-schema__tablename">{{table}}</div>
        <div class="database-schema__details">
          <div class="database-schema__feature" v-for="feature in Object.keys(currentElasticMapping[table])">
            <div>{{feature}} [{{currentElasticMapping[table][feature].type}}]</div>
            <div class="analyzer">
              <span>
                <template v-if="currentElasticMapping[table][feature].searchAnalyzer">Index&nbsp;
                </template>
                Analyzer
              </span>
              <div @click="selectAnalyzer(currentElasticMapping[table][feature].analyzer)"
                   class="analyzer__type">{{currentElasticMapping[table][feature].analyzer}}</div>
            </div>
            <div @click="selectAnalyzer(currentElasticMapping[table][feature].searchAnalyzer)"
                 class="analyzer"
                 v-if="currentElasticMapping[table][feature].searchAnalyzer">
              <span>Search Analyzer</span>
              <div class="analyzer__type">{{currentElasticMapping[table][feature].searchAnalyzer}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'SelectedDatabaseFields',
    computed: {
      ...mapGetters(['currentElasticMapping'])
    },
    methods: {
      selectAnalyzer (analyzer) {
        this.$store.commit('SET_CURRENT_ANALYZER', analyzer)
      }
    }
  }
</script>

<style lang="scss">
  .selected-fields {
    min-width: 300px;
    border: 1px solid $brand-color-dark;
    background-color: #fff;
    .database-schema__feature {
      &:hover {
        background-color: transparent !important;
      }
    }
    .analyzer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      cursor: pointer;
      font-size: .8rem;
      &:hover {
        .analyzer__type {
          text-decoration: underline;
        }
      }
      &__type {
        font-family: monospace;
        color: $brand-color-green;
      }
    }
  }
</style>