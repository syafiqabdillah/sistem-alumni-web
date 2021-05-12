<template>
  <div class="detail-user">
    <div class="container">
      <div class="card">
        <h2 class="title">Detail Data Alumni</h2>
        <Loading v-if="loading" :showMessage="false" />
        <RegisterReviewData v-if="!loading" :data="selectedUser" />
        <div class="contact" v-if="!loading">
          <a :href="waLink(selectedUser)" target="_blank">
            <i class="icofont-whatsapp" :style="'color: #1CA951'"></i>
            Hubungi Alumni via WhatsApp
            <i class="icofont-external-link"></i>
          </a>
        </div>
        <div class="actions" v-if="!loading">
          <Navigator
            :backFunction="kembali"
            :nextFunction="verifikasi"
            :showNextButton="!selectedUser.verified_date"
            nextText="Verifikasi"
            :showNextIcon="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  head() {
    return {
      title: 'Detail Data Alumni',
    }
  },
  name: 'DetailUser',
  beforeMount() {
    this.$preventUnauthorizedAccess(this)
  },
  mounted() {
    this.fetchAlumni()
  },
  methods: {
    kembali() {
      window.history.back()
    },
    verifikasi() {
      this.$store.dispatch(
        'modal/setMessageConfirmation',
        `Apakah yakin ingin verifikasi data untuk alumni ${this.selectedUser.fullname}?`
      )
      this.$store.dispatch('modal/setModalConfirmationVisibility', true)
    },
    confirmVerification() {
      alert(`verifikasi ${this.selectedUser.fullname}`)
    },
    fetchAlumni() {
      this.$store.dispatch('dashboard/setLoading', true)
      const email = this.$route.params.email
      this.$axios
        .get('/users/by-email?email=' + email)
        .then((res) => {
          this.$store.dispatch('dashboard/setSelectedUser', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.$store.dispatch('dashboard/setLoading', false)
        })
    },
    waLink(user) {
      return encodeURI(
        `https://wa.me/${this.phoneEncode(user.phone)}?text=Hai ${user.fullname}, saya ingin verifikasi data kamu`
      )
    },
    phoneEncode(phone) {
      return '+62' + phone.substring(1)
    }
  },
  computed: {
    ...mapState({
      loading: (state) => state.dashboard.users.loading,
      selectedUser: (state) => state.dashboard.users.selectedUser,
    }),
    formValid() {
      return true
    },
  },
}
</script>

<style scoped lang="scss">
.title {
  margin-bottom: 1em;
}
.card {
  display: flex;
  flex-direction: column;
}
.contact {
  text-align: center;
  margin-bottom: 1em;
  font-size: 14px;
}
</style>
