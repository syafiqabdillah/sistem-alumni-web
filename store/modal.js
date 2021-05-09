const INITIAL_STATE = {
  // Modal Notification
  message: '',
  showModal: false,
  isModalSuccess: null,
  isModalError: null,
  // Modal Loading
  showModalLoading: false,
  // Modal Confirmation
  messageConfirmation: '',
  showModalConfirmation: false,
}

const modal = {
  namespaced: true,
  state: () => Object.assign({}, INITIAL_STATE),
  mutations: {
    setMessage(state, message) {
      state.message = message
    },
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
    setMessageConfirmation(state, payload) {
      state.messageConfirmation = payload
    },
    setModalConfirmationVisibility(state, payload) {
      state.showModalConfirmation = payload
    },
    resetModalConfirmation(state) {
      state.messageConfirmation = ''
      state.showModalConfirmation = false
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
    },
    setMessageConfirmation(state, payload) {
      state.commit('setMessageConfirmation', payload)
    },
    setModalConfirmationVisibility(state, payload) {
      state.commit('setModalConfirmationVisibility', payload)
    },
    resetModalConfirmation(state) {
      state.commit('resetModalConfirmation')
    },
  },
}

export default modal
