<template>
  <div class="card" data-aos="fade-up">
    <h2 class="title">
      {{ profile.fullname }}
    </h2>
    <RegisterReviewData :data="profile" />
    <small class="text-center">Ingin mengubah data?</small>
    <div class="button green" @click="hubungiAdmin">
      <i class="icofont-whatsapp"></i>
      Hubungi admin
    </div>
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
    hubungiAdmin() {
      window.open(this.linkWhatsApp, '__blank')
    },
  },
  computed: {
    profile() {
      return this.$getJwtData()
    },
    linkWhatsApp() {
      return `https://wa.me/${this.$getAdminContact()}?text=Hai admin, saya ingin mengubah data alumni saya`
    },
  },
  mounted() {
    window.scroll(0, 0)
    this.$setNavbarTitle(this, 'Profil Alumni')
  },
  beforeDestroy() {
    this.$resetNavbarTitle(this)
  },
}
</script>

<style scoped lang="scss">
.title {
  margin-bottom: 1.5em;
}
</style>
