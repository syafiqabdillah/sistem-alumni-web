<template>
  <div class="container">
    <div class="card" data-aos="fade-up">
      <InputField
        type="password"
        id="oldPassword"
        label="Password lama"
        :value="form.oldPassword"
        :onChange="handleChangeInput"
        :onBlur="validate"
        :valid="validation.oldPassword"
        errorMessage="password tidak boleh kosong"
      />
      <InputField
        type="password"
        id="newPassword"
        label="Password baru"
        :value="form.newPassword"
        :onChange="handleChangeInput"
        :onBlur="validate"
        :valid="validation.newPassword"
        errorMessage="password setidaknya 8 karakter"
      />
      <InputField
        type="password"
        id="confirmPassword"
        label="Konfirmasi password baru"
        :value="form.confirmPassword"
        :onChange="handleChangeInput"
        :onBlur="validate"
        :valid="validation.confirmPassword"
        errorMessage="konfirmasi harus sama dengan password baru"
      />
      <Spacer :height="1" />
      <Navigator
        :backFunction="cancel"
        :nextFunction="submit"
        nextText="Ganti password"
        :showNextIcon="false"
        :nextDisabled="!formValid"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangePassword',
  data() {
    return {
      form: {
        oldPassword: null,
        newPassword: null,
        confirmPassword: null,
      },
      validation: {
        oldPassword: null,
        newPassword: null,
        confirmPassword: null,
      },
    }
  },
  computed: {
    formValid() {
      return (
        this.validation.oldPassword &&
        this.validation.newPassword &&
        this.validation.confirmPassword
      )
    },
  },
  beforeMount() {
    if (!this.$loggedIn()) {
      this.$router.push('/')
    }
  },
  mounted() {
    this.$setNavbarTitle(this, 'Ganti Password')
  },
  beforeDestroy() {
    this.$resetNavbarTitle(this)
  },
  methods: {
    handleChangeInput(e) {
      this.form[e.target.name] = e.target.value
      this.validate(e)
    },
    validate(e) {
      if (e.target.name === 'oldPassword') {
        this.validation.oldPassword = e.target.value.length > 0
      } else if (e.target.name === 'newPassword') {
        this.validation.newPassword = e.target.value.length >= 8
        if (this.form.confirmPassword) {
          this.validation.confirmPassword =
            e.target.value == this.form.confirmPassword
        }
      } else if (e.target.name === 'confirmPassword') {
        this.validation.confirmPassword =
          e.target.value == this.form.newPassword
      }
    },
    cancel() {
      this.$router.push('/profile?page=user')
    },
    submit() {
      if (this.formValid) {
        const data = {
          email: this.$getJwtData()['email'],
          old_password: this.form.oldPassword,
          new_password: this.form.newPassword,
        }
        const config = {
          headers: {
            Authorization: `Bearer ${this.$getCookieManager().get('jwt')}`,
          },
        }
        this.$showModalLoading(this)
        this.$axios
          .post(`/api/users/change-password`, data, config)
          .then(() => {
            this.$showModalSuccess(this, [
              'Berhasil mengganti password',
              'Mengalihkan ke halaman profil...',
            ])
            setTimeout(() => {
              location.assign('/profile?page=user')
            }, 2000)
          })
          .catch((err) => {
            console.log(err)
            this.$showModalError(this, ['Gagal mengganti password'], false)
          })
          .finally(() => {
            this.$hideModalLoading(this)
          })
      }
    },
  },
}
</script>

<style scoped lang="scss">
.card {
  padding: 2em;
}
</style>
