const INITIAL_STATE = {
  title: "",
  showLogo: true
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
    },
    setShowLogo(state, payload) {
      state.showLogo = payload
    }
  },
  actions: {
    setTitle(state, title) {
      state.commit('setTitle', title)
    },
    resetTitle(state) {
      state.commit('resetTitle')
    },
    setShowLogo(state, payload) {
      state.commit('setShowLogo', payload)
    }
  },
}

export default navbar
