const profile = {
  namespaced: true,
  state: () => ({
    activePage: 'user',
    menus: [
      {
        title: 'user',
        icon: 'icofont-user',
        admin_only: false
      },
      {
        title: 'admin',
        icon: 'icofont-dashboard-web',
        admin_only: true
      },
    ],
  }),
  mutations: {
    setActivePage(state, page) {
      state.activePage = page
    },
  },
  actions: {
    setActivePage(state, page) {
      state.commit('setActivePage', page)
    },
  },
}

export default profile
