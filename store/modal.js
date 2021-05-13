const INITIAL_STATE = {
  // Modal Notification
  message: '',
  messages: [],
  showModal: false,
  showShareSocial: false,
  isModalSuccess: null,
  isModalError: null,
  // Modal Loading
  showModalLoading: false,
  // Modal Confirmation
  messageConfirmation: '',
  messagesConfirmation: [],
  showModalConfirmation: false,
  socials: [
    {
      name: 'whatsapp',
      icon: 'icofont-whatsapp',
      color: '#1CA951',
    },
    {
      name: 'facebook',
      icon: 'icofont-facebook',
      color: '#1160C1',
    },
  ],
}

const modal = {
  namespaced: true,
  state: () => Object.assign({}, INITIAL_STATE),
  mutations: {
    setMessage(state, message) {
      state.message = message
    },
    setMessages(state, messages) {
      state.messages = messages
    },
    setShareSocialVisibility(state, payload) {
      state.showShareSocial = payload
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
      state.showShareSocial = false
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
    setMessagesConfirmation(state, payload) {
      state.messagesConfirmation = payload
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
    setShareSocialVisibility(state, payload) {
      state.commit('setShareSocialVisibility', payload)
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
    setMessages(state, messages) {
      state.commit('setMessages', messages)
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
    setMessagesConfirmation(state, messages) {
      state.commit('setMessagesConfirmation', messages)
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
