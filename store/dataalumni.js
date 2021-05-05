const MOCK = {
  year_entry_tk: null,
  year_entry_sd: 2003,
  year_entry_smp: 2009,
  year_entry_sma: null,
  activity: "kerja"
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
    form: MOCK,
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
