const MOCK = {
  fullname: 'Syafiq Abdillah',
  birthplace: 'Bontang',
  birthdate: '03/03/1997',
  gender: '1',
  phone: '085249903865',
  address: 'Jl. Kepodang S-22 BTN PKT Bontang',
  parentName: '',
  parentPhone: '',
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
    form: INITIAL_FORM,
    validation: {
      fullname: null,
      birthplace: null,
      birthdate: null,
      gender: null,
      phone: null,
      address: null,
      parentName: null,
      parentPhone: null,
    },
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
      state.form = INITIAL_FORM
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
