const dashboard = {
  namespaced: true,
  state: () => ({
    users: {
      selectedUser: null,
      data: [],
      loading: true,
    },
  }),
  mutations: {
    setSelectedUser(state, payload) {
      state.users.selectedUser = payload
    },
    setUserData(state, payload) {
      state.users.data = payload
    },
    setLoading(state, payload) {
      state.users.loading = payload
    }
  },
  actions: {
    setSelectedUser(state, payload) {
      state.commit('setSelectedUser', payload)
    },
    setUserData(state, payload) {
      state.commit('setUserData', payload)
    },
    setLoading(state, payload) {
      state.commit('setLoading', payload)
    }
  },
}

export default dashboard
