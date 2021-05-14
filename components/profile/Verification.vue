<template>
  <div class="dashboard">
    <div class="card" data-aos="fade-up">
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
          <i :class="tab.icon"></i>
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
      <Loading v-if="loadingUsers" :showMessage="false" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Dashboard',
  head() {
    return {
      title: 'Verifikasi Data Alumni',
    }
  },
  beforeMount() {
    this.$preventUnauthorizedAccess(this)
  },
  mounted() {
    this.$store.dispatch('dashboard/fetchUserData')
    this.$setNavbarTitle(this, 'Verifikasi Data Alumni')
    window.scroll(0, 0)
  },
  beforeDestroy() {
    this.$resetNavbarTitle(this)
  },
  data() {
    return {
      tabs: [
        {
          text: 'Belum Terverifikasi',
          key: 'unverified',
          icon: 'icofont-info-circle',
        },
        {
          text: 'Terverifikasi',
          key: 'verified',
          icon: 'icofont-verification-check',
        },
      ],
      activeTab: 'unverified',
    }
  },
  computed: {
    ...mapState({
      users: (state) => state.dashboard.users.data,
      loadingUsers: (state) => state.dashboard.users.loading,
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
  },
}
</script>

<style scoped lang="scss">
.tabs {
  display: flex;
  justify-content: center;
  gap: 1em;
  margin-bottom: 1rem;
  color: grey;
  font-size: 14px;
}
.tab {
  flex: 1;
  padding: 0.25em 1em;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 4px;
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
