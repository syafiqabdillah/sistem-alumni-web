const MOCK = {
  email: 'abdillah.syafiq@gmail.com',
  password: 'password123',
  confirmPassword: 'password123',
}

const INITIAL_FORM = {
  email: null,
  password: null,
  confirmPassword: null,
}

const dataemail = {
  namespaced: true,
  state: () => ({
    form: Object.assign({}, INITIAL_FORM),
    validation: Object.assign({}, INITIAL_FORM),
  }),
  mutations: {
    setInput(state, payload) {
      state.form[payload.key] = payload.value
    },
    validate(state, payload) {
      switch (payload.key) {
        case 'email':
          state.validation.email =
            !this.$isEmpty(payload.value) && this.$validateEmail(payload.value)
          break
        case 'password':
          state.validation.password =
            !this.$isEmpty(payload.value) && payload.value.length >= 8
          break
        case 'confirmPassword':
          state.validation.confirmPassword =
            !this.$isEmpty(payload.value) &&
            payload.value === state.form.password
          break
        default:
          state = state
      }
    },
    resetForm(state) {
      state.form = INITIAL_FORM
      state.validation = INITIAL_FORM
    },
  },
  actions: {
    setInput(state, payload) {
      state.commit('setInput', payload)
      state.commit('validate', payload)
    },
    validate(state, payload) {
      state.commit('validate', payload)
    },
    resetForm(state) {
      state.commit('resetForm')
    },
  },
}

export default dataemail
