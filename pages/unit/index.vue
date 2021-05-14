<template>
  <div class="unit" v-if="validCode">
    <div class="banner">
      <img :src="imageBanner" alt="banner" />
    </div>
    <div class="alumni-list">eyo</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codes: ['tk', 'sd', 'smp', 'sma'],
      validCode: false,
      images: {
        sma: require('~/assets/images/home-sma2.jpg'),
        smp: require('~/assets/images/home-smp.jpg'),
        sd: require('~/assets/images/home-sd.jpg'),
        tk: require('~/assets/images/home-tk.jpg'),
      },
      unitName: {
        sma: 'SMAIT Daarul Hikmah',
        smp: 'SMPIT Daarul Hikmah',
        sd: 'SDIT Asy Syaamiil',
        tk: 'TKIT Qurrota Ayun',
      },
    }
  },
  computed: {
    imageBanner() {
      return this.images[this.$route.query.code]
    },
  },
  beforeMount() {
    if (!this.codes.includes(this.$route.query.code)) {
      this.$router.push('/home')
    } else {
      this.validCode = true
    }
  },
  mounted() {
    this.$setNavbarTitle(this, this.unitName[this.$route.query.code])
  },
  beforeDestroy() {
    this.$resetNavbarTitle(this)
  },
}
</script>

<style scoped lang="scss">
.unit {
  background-color: lightblue;
  height: 100%;
  width: 100%;
}
.banner {
  width: 100%;

  img {
    height: auto;
    width: 100%;
    object-fit: cover;
  }
}
</style>
