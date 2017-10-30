import { createClient } from '../../services/elasticsearch'
const state = {
  elasticHost: 'localhost',
  elasticPort: '9200',
  indices: [],
  currentIndex: undefined,
  currentMapping: {},
  analyzers: {
    standard: {
      id: 'standard',
      description: `
        The standard analyzer divides text into terms on word boundaries, 
        as defined by the Unicode Text Segmentation algorithm. It removes most 
        punctuation, lowercases terms, and supports removing stop words.
      `
    },
    whitespace: {
      id: 'whitespace',
      description: `
        The whitespace analyzer divides text into terms whenever it encounters any 
        whitespace character. It does not lowercase terms.
      `
    }
  },
  currentAnalyzer: undefined
}

const mutations = {
  SET_HOST (state, host) {
    state.elasticHost = host
  },
  SET_PORT (state, port) {
    state.elasticPort = port
  },
  SET_INDICES (state, indices) {
    state.indices = indices
  },
  SET_ELASTIC_INDEX (state, index) {
    state.currentIndex = index
  },
  ADD_INDEX_DATABASE_FIELD (state, {name, attrs, table}) {
    let tableFields = state.currentMapping[table]
    if (!tableFields) {
      tableFields = {}
      state.currentMapping[table] = tableFields
    }
    attrs['analyzer'] = 'standard'
    attrs['searchAnalyzer'] = 'standard'
    tableFields[name] = attrs
    // Default Vuex watcher can not handle reactive map changes
    // So assign the old mapping object to a new one and update the state
    state.currentMapping = Object.assign({}, state.currentMapping)
  },
  SET_CURRENT_ANALYZER (state, analyzerId) {
    if (state.analyzers[analyzerId]) {
      state.currentAnalyzer = state.analyzers[analyzerId]
    }
  }
}

const actions = {
  testElasticConnection ({commit, state}) {
    let client = createClient(state)
    client.cat.indices({bytes: 'b', format: 'json'}, function (x, results) {
      commit('SET_INDICES', results)
    })
  }
}

const getters = {
  elasticIndices: state => state.indices,
  currentElasticIndex: state => state.currentIndex,
  currentElasticMapping: state => state.currentMapping,
  currentElasticAnalyzer: state => state.currentAnalyzer,
  elasticClient: state => createClient(state)
}

export default {
  state,
  mutations,
  actions,
  getters
}
