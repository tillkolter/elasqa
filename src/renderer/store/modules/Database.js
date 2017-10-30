import { getTableSchemas } from '../../utils/sql/schemas'
const state = {
  schemas: undefined
}

const mutations = {
  SET_SCHEMAS (state, schemas) {
    state.schemas = schemas
  },
  TOGGLE_DB_TABLE_SHOW_DETAILS  (state, tableName) {
    let tableSchema = state.schemas.find(x => x.tableName === tableName)
    if (tableSchema) {
      tableSchema.showDetails = !tableSchema.showDetails
    }
  }
}

const actions = {
  loadTableSchemas ({commit}) {
    getTableSchemas(function (error, results, fields) {
      if (error) throw error
      commit('SET_SCHEMAS', results.map(function (item) {
        let tableName = item.tableName
        let features = JSON.parse(item.features)
        return {
          'tableName': tableName,
          'features': features,
          'showDetails': false
        }
      }))
    })
  }
}

const getters = {
  databaseTableSchemas: state => {
    return state.schemas
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
