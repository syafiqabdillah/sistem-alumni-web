const profile = {
  namespaced: true,
  state: () => ({
    activePage: 'user',
    verified: false,
    loadingVerified: true,
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
        verified_only: false,
        text: 'Alumni',
      },
      {
        title: 'verification',
        icon: 'icofont-verification-check',
        admin_only: true,
        verified_only: true,
        text: 'Verifikasi',
      },
      {
        title: 'user-config',
        icon: 'icofont-architecture-alt',
        admin_only: true,
        verified_only: true,
        text: 'User Conf.',
      },
    ],
  }),
  mutations: {
    setActivePage(state, page) {
      state.activePage = page
    },
    setVerified(state, verified) {
      state.verified = verified
    },
    setLoadingVerified(state, loading) {
      state.loadingVerified = loading
    },
  },
  actions: {
    setActivePage(state, page) {
      state.commit('setActivePage', page)
    },
    setVerified(state, verified) {
      state.commit('setVerified', verified)
    },
    setLoadingVerified(state, loading) {
      state.commit('setLoadingVerified', loading)
    },
  },
}

export default profile
