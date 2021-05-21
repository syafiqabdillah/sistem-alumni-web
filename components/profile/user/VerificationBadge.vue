<template>
  <div
    :class="{
      status: 'status',
      green: verified,
      orange: !verified,
    }"
  >
    <small v-if="!loadingVerified">
      {{ verified ? 'Terverifikasi' : 'Menunggu verifikasi' }}
    </small>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'VerificationBadge',
  methods: {
    checkVerified() {
      this.$store.dispatch('profile/setLoadingVerified', true)
      this.$axios
        .post(`/api/users/check-verified`, {
          jwt: this.$getCookieManager().get('jwt'),
        })
        .then((res) => {
          this.$store.dispatch('profile/setVerified', res.data.verified)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.$store.dispatch('profile/setLoadingVerified', false)
        })
    },
  },
  computed: {
    ...mapState({
      verified: (state) => state.profile.verified,
      loadingVerified: (state) => state.profile.loadingVerified,
    }),
  },
  mounted() {
    this.checkVerified()
  },
}
</script>

<style scoped lang="scss">
.status {
  padding: 0 1em;
  border-radius: 3px;
  color: var(--bg);
  display: flex;
  justify-content: center;

  small {
    width: initial;
  }

  &.green {
    background-color: var(--primary);
  }

  &.orange {
    background-color: darkorange;
  }
}
</style>
