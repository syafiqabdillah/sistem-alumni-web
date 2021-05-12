<template>
  <div>
    <div class="list-user" v-if="users.length > 0">
      <ProfileListUserItem
        :user="user"
        v-for="user in users"
        :key="user.id"
        :showDetail="showDetail"
        :verifikasi="verifikasi"
      />
    </div>
    <EmptyState v-else />
  </div>
</template>

<script>
export default {
  name: 'ListUser',
  props: {
    users: Array,
  },
  methods: {
    showDetail(user) {
      this.$store.dispatch('dashboard/setSelectedUser', user)
      this.$router.push('/profile/detail/' + user.email)
    },
    verifikasi(user) {
      alert('verifikasi user ' + user.fullname)
    },
  },
}
</script>

<style scoped lang="scss"></style>
