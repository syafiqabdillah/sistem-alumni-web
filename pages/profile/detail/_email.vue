<template>
  <div class="detail-user" data-aos="fade-up">
    <div class="container">
      <div class="card">
        <h2 class="title">{{ selectedUser.fullname }}</h2>
        <Loading v-if="loading" :showMessage="false" />
        <RegisterReviewData v-if="!loading" :data="selectedUser" />
        <div class="contact" v-if="!loading">
          <a :href="waLink(selectedUser)" target="_blank">
            <i class="icofont-whatsapp" :style="'color: #1CA951'"></i>
            Hubungi via WhatsApp
          </a>
          <a :href="`mailto:${selectedUser.email}`">
            <i class="icofont-mail" target="_blank"></i>
            Hubungi via email
          </a>
          <a :href="`tel:${selectedUser.phone}`">
            <i class="icofont-phone"></i>
            Hubungi via telepon
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
    this.$store.dispatch('navbar/setTitle', 'Detail Data Alumni')
  },
  beforeDestroy() {
    this.$store.dispatch('navbar/resetTitle')
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
        `https://wa.me/${this.phoneEncode(user.phone)}?text=Hai ${
          user.fullname
        }, saya ingin verifikasi data kamu`
      )
    },
    phoneEncode(phone) {
      return '+62' + phone.substring(1)
    },
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
  margin: 2em 0;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
