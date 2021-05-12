<template>
  <div class="card">
    <RegisterReviewData :data="profile" />
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    profile() {
      return this.$getJwtData()
    },
  },
  mounted() {
    this.$setNavbarTitle(this, 'Profil Alumni')
  },
  beforeDestroy() {
    this.$resetNavbarTitle(this)
  },
}
</script>

<style scoped lang="scss"></style>
