<template>
  <div class="unit" data-aos="fade-up" v-if="validCode">
    <div class="banner">
      <img :src="imageBanner" alt="banner" />
    </div>
    <UnitChart v-if="!usersLoading" :users="users" :unit="$route.query.code" />
    <div class="input-container">
      <input placeholder="Cari" type="text" class="asy" v-model="searchQuery" />
    </div>

    <Loading :showMessage="false" v-if="usersLoading" />
    <div class="alumni-list-container w-656" v-else>
      <Spacer :height="1" />
      <div v-if="users.length > 0">
        <div class="alumni-list">
          <div class="alumni" v-for="alumni in users" :key="alumni.email">
            <Avatar :user="alumni" />
            <div class="name">
              {{ alumni.fullname }}
            </div>
          </div>
        </div>
        <!-- Pagination -->
        <Spacer />
        <Pagination
          v-if="pagination"
          :goToPage="fetchAlumni"
          :pagination="pagination"
        />
        <Spacer />
      </div>
      <EmptyState v-else />
      <ShareSocial />
      <Spacer />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Unit',
  data() {
    return {
      codes: ['tk', 'sd', 'smp', 'sma'],
      validCode: false,
      searchQuery: '',
      isTyping: false,
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
      users: [],
      usersLoading: true,
      pagination: null,
    }
  },
  watch: {
    searchQuery() {
      this.isTyping = true
      setTimeout(() => {
        if (!this.isTyping && !this.usersLoading) {
          this.fetchAlumni(1)
        }
      }, 1000)
      this.isTyping = false
    },
  },
  computed: {
    imageBanner() {
      return this.images[this.$route.query.code]
    },
  },
  methods: {
    fetchAlumni(page) {
      this.alumniList = []
      this.usersLoading = true
      const config = {
        headers: {
          Authorization: `Bearer ${this.$getCookieManager().get('jwt')}`,
        },
      }
      this.$axios
        .get(
          `/api/users/alumni?unit=${
            this.$route.query.code
          }&page=${page}&query=${this.searchQuery.toLowerCase()}`,
          config
        )
        .then((res) => {
          this.users = res.data.users
          this.pagination = res.data.pagination
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.usersLoading = false
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
    this.$setShowLogo(this, false)
    this.$setNavbarTitle(
      this,
      'Alumni ' + this.unitName[this.$route.query.code]
    )
    this.fetchAlumni(1)
  },
  beforeDestroy() {
    this.$resetNavbarTitle(this)
    this.$setShowLogo(this, true)
  },
}
</script>

<style scoped lang="scss">
.input-container {
  margin: 0 1em;
  display: flex;
  justify-content: center;
}
input.asy {
  max-width: 500px;
  &:focus {
    box-shadow: none;
    border: 1px solid var(--primary);
  }
}
.name {
  width: 100%;
  text-align: center;
}
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
  border: 1px solid lightgrey;
  background: white;
  padding: 1rem;
  border-radius: 5px;
  transition: 200ms all;
  font-size: 0.8rem;
  flex-basis: 30%;
  flex-grow: 1;

  &:hover {
    transform: translateY(-8px);
    border-color: var(--primary);
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
