const profile = {
  namespaced: true,
  state: () => ({
    activePage: 'dashboard',
    menus: [
      {
        title: 'user',
        icon: 'icofont-user',
      },
      {
        title: 'dashboard',
        icon: 'icofont-dashboard-web',
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
