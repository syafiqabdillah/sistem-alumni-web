<template>
  <div class="card" data-aos="fade-up">
    <h2 class="title">
      {{profile.fullname}}
    </h2>
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
