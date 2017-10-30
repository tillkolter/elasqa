const state = {
  history: [],
  jsonHistory: [],
  position: 0
}

const mutations = {
  MOVE_BACK (state) {
    state.position--
  },
  MOVE_FORWARD (state) {
    state.position++
  },
  ADD_RESULT (state, result) {
    if (!state.history.includes(JSON.stringify(result))) {
      state.history.unshift(JSON.stringify(result))
      state.jsonHistory.unshift(result)
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
  currentResults: state => {
    if (state.jsonHistory) {
      return state.jsonHistory[state.position]
    } else {
      return []
    }
  },
  resultsHistory: state => {
    return state.jsonHistory
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
