const MOCK_FORM = {
  year_entry_tk: null,
  year_entry_sd: 2003,
  year_entry_smp: 2009,
  year_entry_sma: null,
  activity: "kerja"
}

const MOCK_VALIDATION = {
  year_entry_tk: true,
  year_entry_sd: true,
  year_entry_smp: true,
  year_entry_sma: true,
  activity: true
}

const INITIAL_FORM = {
  year_entry_tk: null,
  year_entry_sd: null,
  year_entry_smp: null,
  year_entry_sma: null,
  activity: null
}

const datadiri = {
  namespaced: true,
  state: () => ({
    form: Object.assign({}, process.env.useMock ? MOCK_FORM : INITIAL_FORM)
  }),
  mutations: {
    setInput(state, payload) {
      state.form[payload.key] = payload.value
    },
    resetForm(state) {
      state.form = INITIAL_FORM
      state.validation = INITIAL_FORM
    },
  },
  actions: {
    setInput(state, payload) {
      state.commit('setInput', payload)
    },
    resetForm(state) {
      state.commit('resetForm')
    },
  },
}

export default datadiri
