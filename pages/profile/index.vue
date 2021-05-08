<template>
  <div class="profile" v-if="loggedIn">
    <ProfileSideBar />
    <div class="content">
      <ProfileUser data-aos="fade-up" v-if="profile.activePage === 'user'" />
      <ProfileDashboard
        data-aos="fade-up"
        v-if="profile.activePage === 'dashboard'"
      />
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
  computed: {
    ...mapState({
      profile: (state) => state.profile,
    }),
    loggedIn() {
      return this.$loggedIn()
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  margin-left: 60px;
  padding: 3em 1em;
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
}
.profile {
  display: flex;
  height: 100%;
  z-index: 2;

  & > * {
    flex: 1;
  }
}
</style>
