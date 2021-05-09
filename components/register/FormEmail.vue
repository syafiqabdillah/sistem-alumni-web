<template>
  <div class="card">
    <h1 class="title">Daftar sebagai Alumni</h1>
    <InputField
      id="email"
      label="Email"
      type="text"
      :value="form.email"
      :onChange="handleInputChange"
      :onBlur="validateInput"
      :valid="validation.email"
      errorMessage="email tidak sesuai format"
    />
    <InputField
      id="password"
      label="password"
      type="password"
      :value="form.password"
      :onChange="handleInputChange"
      :onBlur="validateInput"
      :valid="validation.password"
      errorMessage="password minimal 8 karakter"
    />
    <InputField
      id="confirmPassword"
      label="Konfirmasi password"
      type="password"
      :value="form.confirmPassword"
      :onChange="handleInputChange"
      :onBlur="validateInput"
      :valid="validation.confirmPassword"
      errorMessage="konfirmasi tidak sesuai"
    />
    <Navigator
      :showBackButton="false"
      :nextDisabled="!formValid"
      :nextFunction="lanjutkan"
    />
    <div class="have-account">
      sudah pernah daftar? <br />
      <NuxtLink to="/login">masuk disini</NuxtLink>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    handleInputChange(e) {
      const key = e.target.name
      const value = e.target.value
      this.$store.dispatch('dataemail/setInput', { key, value })
    },
    validateInput(e) {
      const key = e.target.name
      const value = e.target.value
      this.$store.dispatch('dataemail/validate', { key, value })
    },
    lanjutkan() {
      this.$store.dispatch('register/setCurrentPage', 'data diri')
    },
  },
  computed: {
    formValid() {
      return (
        this.validation.email &&
        this.validation.password &&
        this.validation.confirmPassword
      )
    },
    ...mapState({
      form: (state) => state.dataemail.form,
      validation: (state) => state.dataemail.validation,
    }),
  },
  mounted() {
    // this.$refs.email.focus()
  },
}
</script>

<style scoped>
.card {
  max-width: 500px;
  margin: 0 auto;
}
.button {
  margin-top: 1rem;
}
.have-account {
  margin: 1rem 0;
  font-size: 14px;
  width: 100%;
  text-align: center;
}
</style>
