<template>
  <div class="unit" v-if="validCode">
    <div class="banner">
      <img :src="imageBanner" alt="banner" />
    </div>
    <Loading :showMessage="false" v-if="loadingAlumni" />
    <div class="alumni-list-container w-656" v-if="!loadingAlumni">
      <input
        placeholder="Cari"
        type="text"
        class="asy valid"
        v-model="searchQuery"
      />
      <Spacer />
      <div class="alumni-list">
        <div
          class="alumni"
          v-for="alumni in computedAlumniList"
          :key="alumni.email"
        >
          <div class="name">
            {{ alumni.fullname }}
          </div>
        </div>
      </div>
      <EmptyState v-if="computedAlumniList.length === 0" />
      <Spacer />
      <ShareSocial />
    </div>
    <Spacer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      codes: ['tk', 'sd', 'smp', 'sma'],
      validCode: false,
      searchQuery: '',
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
      alumniList: [],
      loadingAlumni: true,
    }
  },
  computed: {
    imageBanner() {
      return this.images[this.$route.query.code]
    },
    computedAlumniList() {
      return this.alumniList.filter((alumni) => {
        return alumni.fullname
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase())
      })
    },
  },
  methods: {
    fetchAlumni() {
      this.alumniList = []
      this.loadingAlumni = true
      this.$axios
        .get(`users/alumni?unit=${this.$route.query.code}`)
        .then((res) => {
          this.alumniList = res.data
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.loadingAlumni = false
        })
    },
  },
  beforeMount() {
    // cek route
    if (
      !this.codes.includes(this.$route.query.code) ||
      !this.$loggedIn() ||
      !this.$getJwtData()[`year_entry_${this.$route.query.code}`]
    ) {
      this.$router.push('/home')
    } else {
      this.validCode = true
    }
  },
  mounted() {
    this.$setNavbarTitle(
      this,
      'Alumni ' + this.unitName[this.$route.query.code]
    )
    this.fetchAlumni()
  },
  beforeDestroy() {
    this.$resetNavbarTitle(this)
  },
}
</script>

<style scoped lang="scss">
.alumni-list-container {
  padding: 1em;
}
.alumni-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
}
.alumni {
  border: 2px solid var(--primary);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: 200ms all;
  font-size: 0.75rem;

  &:hover {
    transform: translateY(-8px);
  }
}
.unit {
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
