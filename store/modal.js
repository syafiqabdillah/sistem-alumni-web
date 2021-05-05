const modal = {
  namespaced: true,
  state: () => ({
    showModal: false,
    message: '',
    showModalLoading: false,
    isModalSuccess: null,
    isModalError: null,
  }),
  mutations: {
    showModal(state) {
      state.showModal = true
    },
    hideModal(state) {
      state.showModal = false
    },
    showModalLoading(state) {
      state.showModalLoading = true
    },
    hideModalLoading(state) {
      state.showModalLoading = false
    },
    setMessage(state, message) {
      state.message = message
    },
    resetModal(state) {
      state.showModal = false
      state.isModalError = null
      state.isModalSuccess = null
    },
    setModalSuccess(state) {
      state.isModalSuccess = true
    },
    setModalError(state) {
      state.isModalError = true
    },
  },
  actions: {
    showModal(state) {
      state.commit('showModal')
    },
    hideModal(state) {
      state.commit('hideModal')
    },
    showModalLoading(state) {
      state.commit('showModalLoading')
    },
    hideModalLoading(state) {
      state.commit('hideModalLoading')
    },
    setMessage(state, message) {
      state.commit('setMessage', message)
    },
    resetModal(state) {
      state.commit('resetModal')
    },
    setModalSuccess(state) {
      state.commit('setModalSuccess')
    },
    setModalError(state) {
      state.commit('setModalError')
    }
  },
}

export default modal
