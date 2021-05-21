<template>
  <div>
    <div class="card" data-aos="fade-up">
      <div v-if="!loading">
        <ProfileUserAvatarEditable v-if="user" :user="user" :loadProfile="loadProfile" />
        <h2 class="title">
          {{ user.fullname }}
        </h2>
        <ProfileUserVerificationBadge />
        <Spacer />
        <RegisterReviewData v-if="user" :data="user" />
        <Spacer :height="1" />
        <small class="text-center">Ingin mengubah data?</small>
        <div class="button green" @click="hubungiAdmin">
          <i class="icofont-whatsapp"></i>
          Hubungi admin
        </div>
      </div>
      <Loading v-else />
    </div>
    <ProfileUserChangePassword v-if="!loading" />
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      profilePicture: null,
      existingProfilePicture: null,
      defaultImage: require('~/assets/images/user.svg'),
      imageKey: null,
      user: null,
      loading: true,
    }
  },
  methods: {
    edit() {
      this.setFormDataDiri()
    },
    loadProfile() {
      this.loading = true
      const config = this.$getConfigAxios()
      this.$axios
        .get(`/api/users/by-email?email=${this.$getJwtData()['email']}`, config)
        .then((res) => {
          this.user = res.data
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.loading = false
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
    this.loadProfile()
  },
  beforeDestroy() {
    this.$resetNavbarTitle(this)
  },
}
</script>

<style scoped lang="scss">

</style>
