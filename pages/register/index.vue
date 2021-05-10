<template>
  <div class="register">
    <div class="container w-656">
      <RegisterFormEmail data-aos="fade-up" v-if="currentPageIs('email')" />
      <RegisterFormDataDiri
        data-aos="fade-up"
        v-if="currentPageIs('data diri')"
      />
      <RegisterFormDataAlumni
        data-aos="fade-up"
        v-if="currentPageIs('data alumni')"
      />
      <RegisterReview data-aos="fade-up" v-if="currentPageIs('review')" />
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
