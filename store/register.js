const register = {
  namespaced: true,
  state: () => ({
    currentPage: '',
  }),
  mutations: {
    setCurrentPage(state, page) {
      state.currentPage = page
    },
  },
  actions: {
    setCurrentPage(state, payload) {
      state.commit('setCurrentPage', payload)
    },
  },
}

export default register
