const state = {
  history: [],
  position: 0
}

const mutations = {
  MOVE_BACK (state) {
    state.position--
  },
  MOVE_FORWARD (state) {
    state.position++
  },
  ADD_QUERY (state, query) {
    if (!state.history.includes(query)) {
      state.history.unshift(query)
      state.position = 0
    }
  }
}

const actions = {
  someAsyncTask ({commit}) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

const getters = {
  currentQuery: state => {
    return state.history[state.position]
  },
  queryHistory: state => {
    return state.history
  }

}

export default {
  state,
  mutations,
  actions,
  getters
}
