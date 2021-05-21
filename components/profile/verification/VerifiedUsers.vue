<template>
  <div>
    <input type="text" class="asy" v-model="query" placeholder="Cari..." />
    <div v-if="!usersLoading">
      <div v-if="users.length > 0">
        <ProfileListUserItem
          :user="user"
          v-for="user in users"
          :key="user.email"
        />
        <Pagination
          :pagination="paginationData"
          :goToPage="fetchUsers"
        />
      </div>
      <EmptyState v-else />
    </div>
    <Loading v-else />
  </div>
</template>

<script>
export default {
  name: 'VerifiedUsers',
  data() {
    return {
      query: '',
      isTyping: false,
      users: [],
      usersLoading: true,
      paginationData: null
    }
  },
  watch: {
    query() {
      this.isTyping = true
      setTimeout(() => {
        if (!this.isTyping && !this.usersLoading) {
          this.fetchUsers(1)
        }
      }, 1000)
      this.isTyping = false
    },
  },
  methods: {
    fetchUsers(page = 1) {
      const config = {
        headers: {
          Authorization: `Bearer ${this.$getCookieManager().get('jwt')}`,
        },
      }
      this.users = []
      this.usersLoading = true
      this.$axios
        .get(`/api/users/verified?query=${this.query}&page=${page}`, config)
        .then((res) => {
          this.users = res.data.users
          this.paginationData = res.data.pagination
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.usersLoading = false
        })
    },
  },
  mounted() {
    this.fetchUsers()
  },
}
</script>

<style scoped lang="scss">
input.asy {
  margin: 0 0 1rem !important;

  &:focus {
    box-shadow: none;
    border: 1px solid var(--primary);
  }
}
</style>
