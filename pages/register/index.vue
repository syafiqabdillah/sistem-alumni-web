<template>
  <div class="register">
    <div class="container">
      <RegisterFormEmail v-if="currentPageIs('email')" />
      <RegisterFormDataDiri
        v-if="currentPageIs('data diri')"
      ></RegisterFormDataDiri>
      <RegisterFormDataAlumni v-if="currentPageIs('data alumni')" />
      <RegisterReview v-if="currentPageIs('review')" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Register',
  mounted() {
    if (!this.currentPage) {
      this.$store.dispatch('register/setCurrentPage', 'email')
    }
  },
  methods: {
    currentPageIs(page) {
      return this.currentPage == page
    },
  },
  computed: {
    ...mapState({
      currentPage: (state) => state.register.currentPage,
    }),
  },
}
</script>

<style scoped></style>
