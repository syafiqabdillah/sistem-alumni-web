<template>
  <div class="modal" v-if="modal.showModalConfirmation" @click.self="close">
    <div class="modal-content" data-aos="fade-up">
      <span id="close" @click="close">
        <i class="icofont-close"></i>
      </span>
      <div class="modal-body">
        <i class="icofont-question"></i>
        <p>{{ modal.messageConfirmation }}</p>
        <div class="actions">
          <div class="button grey" @click="close">Tidak</div>
          <div class="button green" @click="confirm">Ya</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    showCloseButton: {
      type: Boolean,
      default: true,
    },
    hideOnClickBackdrop: {
      type: Boolean,
      default: true,
    },
  },
  beforeMount() {
    if (!this.$loggedIn() || !this.$getJwtData()['is_admin']) {
      this.$router.push('/')
    }
  },
  methods: {
    close() {
      this.$store.dispatch('modal/resetModalConfirmation')
    },
    confirm() {
      this.close()
      this.$showModalLoading(this)
      const adminJwt = this.$getCookieManager().get('jwt')
      const data = {
        email: this.selectedUser.email,
        jwt: adminJwt,
      }
      this.$axios
        .post('users/verify', data)
        .then(() => {
          this.$showModalSuccess(
            this,
            `Berhasil verifikasi data ${this.selectedUser.fullname}. Mengembalikan ke halaman admin.`
          )
          setTimeout(() => {
            this.$resetModal(this)
            this.$router.push('/profile?menu=admin')
          }, 3000)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.$hideModalLoading(this)
        })
    },
  },
  computed: {
    ...mapState({
      modal: (state) => state.modal,
      selectedUser: (state) => state.dashboard.users.selectedUser,
    }),
  },
}
</script>

<style lang="scss" scoped>
.modal {
  display: flex; /* Hidden by default */
  justify-content: center;
  align-items: center;
  position: fixed; /* Stay in place */
  z-index: 100; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.modal-content {
  background-color: var(--bg);
  margin: 15% 1em; /* 15% from the top and centered */
  padding: 1em;
  border: 1px solid var(--grey);
  border-radius: 0.5rem;
  width: 420px; /* Could be more or less, depending on screen size */
  max-height: 48%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.modal-body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    padding: 1em 0;
  }

  i {
    font-size: 2em;
    margin-bottom: 0.5em;
    color: var(--bg);
    background-color: var(--primary);
    border-radius: 50%;
    padding: 0.35em;
  }
}
h2 {
  font-weight: 500;
}
#close:hover {
  cursor: pointer;
}
.actions {
  display: flex;
  width: 100%;
  gap: 8px;
  padding-top: 1em;
}
</style>
