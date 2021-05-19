<template>
  <div class="detail-user" data-aos="fade-up">
    <div class="container">
      <div class="card">
        <Loading v-if="loading" :showMessage="false" />
        <div v-else>
          <h2 class="title">{{ selectedUser.fullname }}</h2>
          <RegisterReviewData
            v-if="selectedUser"
            :data="selectedUser"
          />
          <div class="contact">
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
          <div class="actions">
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
    this.$store.dispatch('navbar/setTitle', 'Detail Data Alumni')
    this.fetchAlumni()
  },
  beforeDestroy() {
    this.$store.dispatch('navbar/resetTitle')
  },
  methods: {
    kembali() {
      window.history.back()
    },
    verifikasi() {
      const messages = [
        `Apakah yakin ingin verifikasi data untuk alumni ${this.selectedUser.fullname}?`,
        `Verifikasi oleh: ${this.$getJwtData()['fullname']}`,
      ]
      this.$store.dispatch('modal/setMessagesConfirmation', messages)
      this.$store.dispatch('modal/setModalConfirmationVisibility', true)
    },
    confirmVerification() {
      alert(`verifikasi ${this.selectedUser.fullname}`)
    },
    fetchAlumni() {
      this.$store.dispatch('dashboard/setLoading', true)
      const email = this.$route.params.email
      const jwt = this.$getCookieManager().get('jwt')
      const config = {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
      this.$axios
        .get(`/api/users/by-email?email=${email}`, config)
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
  margin-bottom: 1.5em;
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
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.5em;

  @media (min-width: 500px) {
    flex-direction: row;
  }
}
</style>
