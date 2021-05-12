const INITIAL_STATE = {
  title: ""
}

const navbar = {
  namespaced: true,
  state: () => (Object.assign({}, INITIAL_STATE)),
  mutations: {
    setTitle(state, title) {
      state.title = title
    },
    resetTitle(state) {
      state.title = ""
    }
  },
  actions: {
    setTitle(state, title) {
      state.commit('setTitle', title)
    },
    resetTitle(state) {
      state.commit('resetTitle')
    }
  },
}

export default navbar
