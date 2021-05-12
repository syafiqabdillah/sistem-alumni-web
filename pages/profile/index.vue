<template>
  <div class="profile" v-if="loggedIn">
     <ProfileSideBar />
    <div class="content">
      <ProfileUser data-aos="fade-up" v-if="profile.activePage === 'user'" />
      <ProfileVerification
        data-aos="fade-up"
        v-if="profile.activePage === 'verification'"
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
  mounted() {
    this.$router.push('/profile?page=' + this.profile.activePage)
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
    }
  },
  head() {
    return {
      title: "Profil Alumni"
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  width: 100%;
  margin-left: 60px;
  padding: 1.25em;
  padding-left: 0;
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
  position: relative;

  & > * {
    flex: 1;
  }
}
</style>
