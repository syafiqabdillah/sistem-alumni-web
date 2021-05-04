<template>
  <div class="card">
    <h1 class="title">Daftar sebagai Alumni</h1>
    <label for="email">Email</label>
    <input
      type="email"
      :class="{
        valid: $store.state.register.validation.email === true,
        error: $store.state.register.validation.email === false,
      }"
      id="email"
      ref="email"
      @input="handleEmailChange"
      @blur="validateEmail"
      :value="email"
      autocomplete="off"
    />
    <small
      class="text-red"
      v-if="$store.state.register.validation.email === false"
    >
      format email tidak sesuai
    </small>
    <label for="password">Password</label>
    <input
      @blur="validatePassword"
      :class="{
        valid: $store.state.register.validation.password === true,
        error: $store.state.register.validation.password === false,
      }"
      type="password"
      id="password"
      @input="handlePasswordChange"
      :value="password"
      autocomplete="off"
    />
    <small
      class="text-red"
      v-if="$store.state.register.validation.password === false"
    >
      panjang password setidaknya 8 karakter
    </small>
    <label for="confirm-password">Ketik ulang password</label>
    <input
      @blur="validateConfirmPassword"
      :class="{
        valid: $store.state.register.validation.confirmPassword === true,
        error: $store.state.register.validation.confirmPassword === false,
      }"
      type="password"
      id="confirm-password"
      @input="handleConfirmPasswordChange"
      :value="confirmPassword"
    />
    <small
      class="text-red"
      v-if="$store.state.register.validation.confirmPassword === false"
    >
      konfirmasi password tidak sesuai
    </small>
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
import { mapState } from 'vuex'
export default {
  data() {
    return {
      isTyping: false,
    }
  },
  methods: {
    handleEmailChange(e) {
      this.$store.dispatch('register/setEmail', e.target.value)
      this.validateEmail()
    },
    handlePasswordChange(e) {
      this.$store.dispatch('register/setPassword', e.target.value)
      this.validatePassword()
      if (this.confirmPassword) {
        this.validateConfirmPassword()
      }
    },
    handleConfirmPasswordChange(e) {
      this.$store.dispatch('register/setConfirmPassword', e.target.value)
      this.validateConfirmPassword()
      if (this.password) {
        this.validatePassword()
      }
    },
    validateEmail() {
      const email = this.$store.state.register.form.email
      if (!this.$isEmpty(email)) {
        const isEmailValid = this.$validateEmail(email)
        this.$store.dispatch('register/setValidationEmail', isEmailValid)
      }
    },
    validatePassword() {
      const password = this.$store.state.register.form.password
      if (!this.$isEmpty(password)) {
        const isPasswordValid = password.length >= 8
        this.$store.dispatch('register/setValidationPassword', isPasswordValid)
      }
    },
    validateConfirmPassword() {
      const password = this.$store.state.register.form.password
      const confirmPassword = this.$store.state.register.form.confirmPassword
      if (!this.$isEmpty(confirmPassword)) {
        const isConfirmPasswordValid = password === confirmPassword
        this.$store.dispatch(
          'register/setValidationConfirmPassword',
          isConfirmPasswordValid
        )
      }
    },
    lanjutkan() {
      this.$store.dispatch('register/setCurrentPage', 'data diri')
    },
  },
  computed: {
    formValid() {
      return (
        this.$store.state.register.validation.email &&
        this.$store.state.register.validation.password &&
        this.$store.state.register.validation.confirmPassword
      )
    },
    ...mapState({
      email: (state) => state.register.form.email,
      password: (state) => state.register.form.password,
      confirmPassword: (state) => state.register.form.confirmPassword,
    }),
  },
  mounted() {
    this.$refs.email.focus()
  },
}
</script>

<style scoped>
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
