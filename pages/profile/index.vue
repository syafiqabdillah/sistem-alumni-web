<template>
  <div class="profile" v-if="loggedIn">
    <ProfileNavigationSideBar />
    <ProfileNavigationBottomMenu />
    <div class="profile-content">
      <ProfileUser v-if="profile.activePage === 'user'" />
      <ProfileOtherAlumni v-if="profile.activePage === 'group'" />
      <ProfileVerification v-if="profile.activePage === 'verification'" />
      <ProfileUserConfig v-if="profile.activePage === 'user-config'" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Profile',
  beforeMount() {
    if (!this.loggedIn) {
      this.$router.push('/')
    }
  },
  mounted() {
    if (this.$route.query.page !== undefined) {
      const page = this.$route.query.page
      this.$router.push('/profile?page=' + page)
      this.$store.dispatch('profile/setActivePage', page)
    }
    window.scroll(0, 0)
  },
  computed: {
    ...mapState({
      profile: (state) => state.profile,
    }),
    loggedIn() {
      return this.$loggedIn()
    },
    userData() {
      return this.$getJwtData()
    },
  },
  head() {
    return {
      title: 'Profil Alumni',
    }
  },
}
</script>

<style lang="scss" scoped>
.profile-content {
  height: 100%;
  width: 100%;
  margin: 0 1em 0 60px;
  padding: 1.25em 0;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 500px) {
    margin: 0 1em;
  }
}
.profile {
  display: flex;
  height: 100%;
  z-index: 2;
  position: relative;

  & > * {
    flex: 1;
  }
}
</style>
