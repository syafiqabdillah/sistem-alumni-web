<template>
  <div class="card" data-aos="fade-up">
    <h2 class="title">
      {{ profile.fullname }}
    </h2>
    <RegisterReviewData :data="profile" />
  </div>
</template>

<script>
export default {
  name: 'User',
  methods: {
    edit() {
      this.setFormDataDiri()
    },
    setFormDataDiri() {
      const formDataDiri = {
        fullname: this.profile.fullname,
        birthplace: this.profile.birthplace,
        birthdate: this.profile.birthdate,
        gender: this.profile.gender,
        phone: this.profile.phone,
        address: this.profile.address,
        parentName: this.profile.parent_name,
        parentPhone: this.profile.parent_phone,
      }
      this.$store.dispatch('datadiri/setForm', formDataDiri)
    },
  },
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

<style scoped lang="scss">
.card {
  max-width: 360px;
}
</style>
