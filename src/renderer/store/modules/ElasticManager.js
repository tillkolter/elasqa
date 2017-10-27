import { createClient } from '../../services/elasticsearch'
const state = {
  elasticHost: 'localhost',
  elasticPort: '9200',
  indices: [],
  currentIndex: undefined
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
  elasticIndices: state => {
    return state.indices
  },
  currentElasticIndex: state => {
    return state.currentIndex
  },
  elasticClient: state => {
    return createClient(state)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
