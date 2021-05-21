<template>
  <div class="other-alumni">
    <ProfileOtherAlumniUnit
      v-for="unit in units"
      :key="unit.key"
      :unit="unit"
    />
    <ShareSocial />
  </div>
</template>

<script>
export default {
  name: 'OtherAlumni',
  head() {
    return {
      title: 'Alumni Terdaftar',
    }
  },
  data() {
    return {
      units: [
        {
          name: 'SMAIT Daarul Hikmah',
          src: require('~/assets/images/home-sma2.jpg'),
          count: null,
          key: 'sma',
        },
        {
          name: 'SMPIT Daarul Hikmah',
          src: require('~/assets/images/home-smp.jpg'),
          count: null,
          key: 'smp',
        },
        {
          name: 'SDIT Asy Syaamil',
          src: require('~/assets/images/home-sd.jpg'),
          count: 0,
          key: 'sd',
        },
        {
          name: 'TKIT Qurrota Ayun',
          src: require('~/assets/images/home-tk.jpg'),
          count: 0,
          key: 'tk',
        },
      ],
    }
  },
  mounted() {
    window.scroll(0, 0)
    this.$setNavbarTitle(this, 'Alumni Terdaftar')
  },
  beforeDestroy() {
    this.$resetNavbarTitle(this)
  },
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
  }
}
</script>

<style scoped lang="scss">
.other-alumni {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
