<template>
  <div class="card" data-aos="fade-up">
    <h2 class="title">
      {{ profile.fullname }}
    </h2>
    <small class="text-center status" v-if="!loadingVerified">
      {{ verified ? 'Terverifikasi':'Menunggu verifikasi' }}
    </small>
    <Spacer />
    <RegisterReviewData :data="profile" />
    <Spacer />
    <small class="text-center">Ingin mengubah data?</small>
    <div class="button green" @click="hubungiAdmin">
      <i class="icofont-whatsapp"></i>
      Hubungi admin
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'User',
  methods: {
    edit() {
      this.setFormDataDiri()
    },
    checkVerified() {
      this.$store.dispatch('profile/setLoadingVerified', true)
      this.$axios
        .post(`/users/check-verified`, {
          jwt: this.$getCookieManager().get('jwt'),
        })
        .then((res) => {
          this.$store.dispatch('profile/setVerified', res.data.verified)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.$store.dispatch('profile/setLoadingVerified', false)
        })
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
    ...mapState({
      verified: (state) => state.profile.verified,
      loadingVerified: (state) => state.profile.loadingVerified,
    }),
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
    this.checkVerified()
  },
  beforeDestroy() {
    this.$resetNavbarTitle(this)
  },
}
</script>

<style scoped lang="scss">
.status {
  background-color: var(--secondary);
  width: initial;
  padding: 0 1em;
  border-radius: 3px;
}
</style>
