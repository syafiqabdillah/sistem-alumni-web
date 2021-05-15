const INITIAL_STATE = {
  activePage: 'list',
  pages: ['list', 'edit'],
  form: null,
  validation: {
    fullname: null,
    birthplace: null,
    birthdate: null,
    phone: null,
    address: null,
    year_entry_tk: null,
    year_entry_sd: null,
    year_entry_smp: null,
    year_entry_sma: null,
    activity: null
  }
}

const userconfig = {
  namespaced: true,
  state: () => Object.assign({}, INITIAL_STATE),
  mutations: {
    setActivePage(state, page) {
      state.activePage = page
    },
    reset(state) {
      state = Object.assign({}, INITIAL_STATE)
    },
    setForm(state, user) {
      state.form = user
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
    setInput(state, payload) {
      state.form[payload.key] = payload.value
      state.validation[payload.key] = null
    },
  },
  actions: {
    setActivePage(state, page) {
      state.commit('setActivePage', page)
    },
    reset(state) {
      state.commit('reset')
    },
    setForm(state, user) {
      state.commit('setForm', user)
    },
    setInput(state, payload) {
      state.commit('setInput', payload)
    },
    validate(state, payload) {
      state.commit('validate', payload)
    }
  },
}

export default userconfig
