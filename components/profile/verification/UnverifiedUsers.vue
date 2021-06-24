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
        <Pagination :goToPage="fetchUsers" :pagination="paginationData" />
      </div>
      <EmptyState v-else />
    </div>
    <Loading v-else />
  </div>
</template>

<script>
export default {
  name: 'UnverifiedUsers',
  data() {
    return {
      query: '',
      isTyping: false,
      users: [],
      usersLoading: true,
      paginationData: {
        currentPage: 1,
        totalPage: 1,
        totalData: null,
        perPage: null
      }
    }
  },
  watch: {
    query(prevState, nextState) {
      if (prevState !== nextState) {
        this.isTyping = true
        setTimeout(() => {
          if (!this.isTyping && !this.usersLoading) {
            this.fetchUsers(1)
          }
        }, 1000)
        this.isTyping = false
      }
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
        .get(`/api/users/unverified?query=${this.query}&page=${page}`, config)
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
