const profile = {
  namespaced: true,
  state: () => ({
    activePage: 'user',
    menus: [
      {
        title: 'user',
        icon: 'icofont-user',
        admin_only: false,
        verified_only: false,
        text: 'Profil',
      },
      {
        title: 'group',
        icon: 'icofont-users',
        admin_only: false,
        verified_only: true,
        text: 'Alumni',
      },
      {
        title: 'verification',
        icon: 'icofont-verification-check',
        admin_only: true,
        verified_only: true,
        text: 'Verifikasi',
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
