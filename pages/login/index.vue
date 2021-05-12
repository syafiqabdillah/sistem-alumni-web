<template>
  <div class="container" v-if="!loggedIn">
    <div class="card w-500 no-shadow" data-aos="fade-up">
      <div class="login">
        <h1 class="title">Sistem Alumni Asy Syaamil</h1>
        <form @submit="formValid ? login : () => {}" id="login">
          <InputField
            id="email"
            label="Email"
            type="text"
            :value="form.email"
            :onChange="handleInputChange"
            :valid="null"
          />
          <InputField
            id="password"
            label="password"
            type="password"
            :value="form.password"
            :onChange="handleInputChange"
          />
        </form>
        <button
          type="submit"
          class="green"
          @click="login"
          form="login"
          value="Masuk"
        >
          Masuk
        </button>
      </div>
      <div class="no-account">
        belum mendaftar sebagai alumni? <br />
        <NuxtLink to="/register">daftar disini</NuxtLink> <br />
      </div>
    </div>
  </div>
</template>

<script setup>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      validation: {
        email: true,
      },
    }
  },
  beforeMount() {
    if (this.loggedIn) {
      this.$router.push('/')
    }
  },
  methods: {
    handleInputChange(e) {
      this.form[e.target.name] = e.target.value
      this.validateInput(e)
    },
    validateInput(e) {
      this.validation[e.target.name] = this.$validateEmail(e.target.value)
    },
    login(e) {
      e.preventDefault()
      if (this.formValid) {
        this.$showModalLoading(this)
        this.$axios
          .$post('users/login', this.form)
          .then((jwt) => {
            this.$getCookieManager().set('jwt', jwt)
            const user = this.$decodeJwt(jwt)
            this.$showModalSuccess(
              this,
              `Selamat datang kembali, ${user.fullname}`
            )
            setTimeout(() => {
              this.$resetModal(this)
              location.href = '/profile'
            }, 1700)
          })
          .catch((err) => {
            console.log(err)
            this.$showModalError(this, `Gagal login`)
          })
          .finally(() => {
            setTimeout(() => {
              this.$hideModalLoading(this)
            }, 1700)
          })
      }
    },
  },
  computed: {
    formValid() {
      return this.form.email && this.validation.email && this.form.password
    },
    loggedIn() {
      return this.$loggedIn()
    },
  },
}
</script>

<style scoped>
.title {
  margin-bottom: 1rem;
}
.button {
  margin-top: 1rem;
}
.no-account {
  margin: 1rem 0;
  font-size: 14px;
  width: 100%;
  text-align: center;
}
</style>
