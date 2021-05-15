<template>
  <div class="user-config">
    <div class="card" data-aos="fade-up">
      <ProfileUserConfigListUser v-if="userconfig.activePage === 'list'" />
      <ProfileUserConfigEdit v-if="userconfig.activePage === 'edit'" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'UserConfig',
  computed: {
    ...mapState({
      userconfig: (state) => state.userconfig,
    }),
  },
  beforeMount() {
    this.$preventUnauthorizedAccess(this)
  },
  mounted() {
    this.$setNavbarTitle(this, 'User Config')
    window.scroll(0, 0)
  },
  beforeDestroy() {
    this.$resetNavbarTitle(this)
  },
}
</script>

<style scoped lang="scss">
.card {
  padding: 1em;
}
</style>
