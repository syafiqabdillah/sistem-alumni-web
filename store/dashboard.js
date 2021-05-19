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
    },
    fetchUserData(state) {
      state.commit('setUserData', [])
      state.commit('setLoading', true)
      const config = {
        headers: {
          Authorization: `Bearer ${this.$getCookieManager().get('jwt')}`
        }
      }
      this.$axios
        .get(`users`, config)
        .then((res) => {
          state.commit('setUserData', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          state.commit('setLoading', false)
        })
    }
  },
}

export default dashboard
