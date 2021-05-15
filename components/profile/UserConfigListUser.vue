<template>
  <div class="user-config-list-user">
    <Loading :showMessage="false" v-if="loadingUsers" />
    <div v-else class="users">
      <input
        type="text"
        class="asy valid"
        v-model="searchQuery"
        placeholder="Cari alumni"
      />
      <Spacer />
      <div class="user" v-for="user in computedUsers" :key="user.email">
        <div class="name">
          {{ user.fullname }}
        </div>
        <div class="button grey" @click="editUser(user)">
          <i class="icofont-settings-alt"></i>edit
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      loadingUsers: true,
      searchQuery: '',
    }
  },
  computed: {
    computedUsers() {
      return this.users.filter((user) => {
        return user.fullname
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase())
      })
    },
  },
  methods: {
    fetchUsers() {
      this.loadingUsers = true
      this.$axios
        .get(`users/?jwt=${this.$getCookieManager().get('jwt')}`)
        .then((res) => {
          this.users = res.data
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.loadingUsers = false
        })
    },
    editUser(user) {
      this.$store.dispatch('userconfig/setForm', user)
      this.$store.dispatch('userconfig/setActivePage', 'edit')
    },
  },
  mounted() {
    this.fetchUsers()
  },
}
</script>

<style scoped lang="scss">
.users {
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
}
.user {
  min-height: 3rem;
  border: 1px solid lightgrey;
  border-bottom: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;

  &:hover {
    background-color: var(--primary);
    color: var(--bg);

    .button {
      background-color: var(--bg);
      color: var(--primary);
    }
  }

  &:last-child {
    border-bottom: 1px solid lightgrey;
  }
}
.button {
  width: initial;
  height: 100%;
  margin: 0;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}
</style>
