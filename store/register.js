const MOCK = {
  email: 'abdillah.syafiq@gmail.com',
  password: 'password123',
  confirmPassword: 'password123',
}

const register = {
  namespaced: true,
  state: () => ({
    currentPage: '',
    form: {
      email: null,
      password: null,
      confirmPassword: null,
    },
    validation: {
      email: null,
      password: null,
      confirmPassword: null,
    },
  }),
  mutations: {
    // Email
    setEmail(state, email) {
      state.form.email = email.toLowerCase()
      state.validation.email = null
    },
    setValidationEmail(state, valid) {
      state.validation.email = valid
    },
    // Password
    setPassword(state, password) {
      state.form.password = password
      state.validation.password = null
    },
    setValidationPassword(state, payload) {
      state.validation.password = payload
    },
    // Confirm Password
    setConfirmPassword(state, confirmPassword) {
      state.form.confirmPassword = confirmPassword
      state.validation.confirmPassword = null
    },
    setValidationConfirmPassword(state, payload) {
      state.validation.confirmPassword = payload
    },
    // Reset Form
    resetForm(state) {
      state.form.email = ''
      state.form.password = ''
      state.form.confirmPassword = ''
    },
    // Set current page
    setCurrentPage(state, page) {
      state.currentPage = page
    },
  },
  actions: {
    setEmail(state, email) {
      state.commit('setEmail', email)
    },
    setPassword(state, password) {
      state.commit('setPassword', password)
    },
    setConfirmPassword(state, confirmPassword) {
      state.commit('setConfirmPassword', confirmPassword)
    },
    setValidationEmail(state, valid) {
      state.commit('setValidationEmail', valid)
    },
    setValidationPassword(state, payload) {
      state.commit('setValidationPassword', payload)
    },
    setValidationConfirmPassword(state, payload) {
      state.commit('setValidationConfirmPassword', payload)
    },
    resetForm(state) {
      state.commit('resetForm')
    },
    setCurrentPage(state, payload) {
      state.commit('setCurrentPage', payload)
    },
  },
}

export default register
