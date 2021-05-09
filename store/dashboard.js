const dashboard = {
  namespaced: true,
  state: () => ({
    users: {
      columns: [
        {
          label: "Nama",
          field: "fullname"
        },
        {
          label: "Email",
          field: "email",
        },
        {
          label: "Tempat lahir",
          field: "birthplace",
        },
        {
          label: "Tanggal lahir",
          field: "birthdate",
        },
        {
          label: "Gender",
          field: "gender",
        },
        {
          label: "No HP",
          field: "phone",
        },
        {
          label: "Alamat",
          field: "address",
        },
        {
          label: "Tahun masuk TK",
          field: "year_entry_tk",
        },
        {
          label: "Tahun masuk SD",
          field: "year_entry_sd",
        },
        {
          label: "Tahun masuk SMP",
          field: "year_entry_smp",
        },
        {
          label: "Tahun masuk SMA",
          field: "year_entry_sma",
        },
      ],
      data: [],
      loading: true,
    },
  }),
  mutations: {
    setUserData(state, payload) {
      state.users.data = payload
    },
    setLoading(state, payload) {
      state.users.loading = payload
    }
  },
  actions: {
    setUserData(state, payload) {
      state.commit('setUserData', payload)
    },
    setLoading(state, payload) {
      state.commit('setLoading', payload)
    }
  },
}

export default dashboard
