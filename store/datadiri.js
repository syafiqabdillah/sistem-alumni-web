const MOCK = {
  fullname: 'Syafiq Abdillah U',
  birthplace: 'Bontang',
  birthdate: '1997-03-03',
  gender: 1,
  phone: '085249903865',
  address: 'Jl. Kepodang S22',
  parentName: 'Isro Umarghani',
  parentPhone: null,
}

const INITIAL_FORM = {
  fullname: null,
  birthplace: null,
  birthdate: null,
  gender: null,
  phone: null,
  address: null,
  parentName: null,
  parentPhone: null,
}

const datadiri = {
  namespaced: true,
  state: () => ({
    form: MOCK,
    validation: Object.assign({}, INITIAL_FORM)
  }),
  mutations: {
    setInput(state, payload) {
      state.form[payload.key] = payload.value
      state.validation[payload.key] = null
    },
    validate(state, payload) {
      switch (payload.key) {
        case 'fullname':
          state.validation.fullname = !this.$isEmpty(payload.value)
          break
        case 'birthplace':
          state.validation.birthplace = !this.$isEmpty(payload.value)
          break
        case 'birthdate':
          state.validation.birthdate = !this.$isEmpty(payload.value)
          break
        case 'phone':
          state.validation.phone = !this.$isEmpty(payload.value)
          break
        case 'address':
          state.validation.address = !this.$isEmpty(payload.value)
          break
        default:
          state = state
      }
    },
    resetForm(state) {
      state.form = Object.assign({}, INITIAL_FORM)
    },
  },
  actions: {
    setInput(state, payload) {
      state.commit('setInput', payload)
      state.commit('validate', payload)
    },
    validateInput(state, payload) {
      state.commit('validate', payload)
    },
    resetForm(state) {
      state.commit('resetForm')
    },
  },
}

export default datadiri
