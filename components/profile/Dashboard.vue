<template>
  <div class="dashboard">
    <div class="card">
      <h3 class="title">Verifikasi Data Alumni</h3>
      <div class="tabs" v-if="!loadingUsers">
        <div
          :class="{
            tab: 'tab',
            active: tab.key === activeTab,
          }"
          v-for="tab in tabs"
          :key="tab.key"
          @click="setActiveTab(tab.key)"
        >
          {{ tab.text }}
        </div>
      </div>
      <!-- User Table -->
      <div class="lists" v-if="!loadingUsers">
        <ProfileListUser
          :users="unverifiedUsers"
          v-if="activeTab === 'unverified'"
        />
        <ProfileListUser
          :users="verifiedUsers"
          v-if="activeTab === 'verified'"
        />
      </div>
      <Loading v-if="loadingUsers" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Dashboard',
  head() {
    return {
      title: 'Dashboard Admin',
    }
  },
  beforeMount() {
    this.$preventUnauthorizedAccess(this)
  },
  mounted() {
    this.fetchUserData()
  },
  data() {
    return {
      tabs: [
        {
          text: 'Belum terverifikasi',
          key: 'unverified',
        },
        {
          text: 'Terverifikasi',
          key: 'verified',
        },
      ],
      activeTab: 'unverified',
    }
  },
  computed: {
    ...mapState({
      users: (state) => state.dashboard.users.data,
      loadingUsers: state => state.dashboard.users.loading
    }),
    unverifiedUsers() {
      return this.users.filter((user) => {
        return user.verified_date === null
      })
    },
    verifiedUsers() {
      return this.users.filter((user) => {
        return user.verified_date
      })
    },
  },
  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName
    },
    fetchUserData() {
      this.$store.dispatch('dashboard/setLoading', true)
      this.$axios
        .get('users')
        .then((res) => {
          this.$store.dispatch('dashboard/setUserData', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.$store.dispatch('dashboard/setLoading', false)
        })
    },
  },
}
</script>

<style scoped lang="scss">
.tabs {
  font-size: 14px;
  display: flex;
  justify-content: center;
  gap: 1em;
  margin-bottom: 1rem;
  overflow-x: scroll;
}
.tab {
  padding: .25em 1em;
  border-radius: 5px;
  &:hover {
    cursor: pointer;

    .active {
      text-decoration: none;
    }
  }

  &.active {
    color: var(--bg);
    background-color: var(--primary);
  }
}
</style>
