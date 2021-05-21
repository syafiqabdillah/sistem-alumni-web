<template>
  <div class="user-config-list-user" data-aos="fade-up">
    <Loading :showMessage="false" v-if="usersLoading" />
    <div v-else class="users">
      <input
        type="text"
        class="asy"
        v-model="searchQuery"
        placeholder="Cari alumni"
      />
      <Spacer />
      <div class="users">
        <div class="user" v-for="user in users" :key="user.email">
          <div class="name">
            {{ user.fullname }}
            <small>
              {{ user.is_admin ? 'admin' : null }}
            </small>
          </div>
          <div class="button grey" @click="editUser(user)">
            <i class="icofont-settings-alt"></i>edit
          </div>
        </div>
      </div>
      <Pagination :goToPage="fetchUsers" :pagination="paginationData" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      usersLoading: true,
      searchQuery: '',
      paginationData: null,
      isTyping: false
    }
  },
  watch: {
    searchQuery() {
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
    fetchUsers(page) {
      this.usersLoading = true
      const config = {
        headers: {
          Authorization: `Bearer ${this.$getCookieManager().get('jwt')}`,
        },
      }
      this.$axios
        .get(`/api/users?query=${this.searchQuery}&page=${page}`, config)
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
    editUser(user) {
      this.$store.dispatch('userconfig/setForm', user)
      this.$store.dispatch('userconfig/setActivePage', 'edit')
    },
  },
  mounted() {
    this.fetchUsers(1)
    window.scroll(0, 0)
  },
}
</script>

<style scoped lang="scss">
input.asy {
  &:focus {
    box-shadow: none;
    border: 1px solid var(--primary);
  }
}
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
