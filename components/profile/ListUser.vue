<template>
  <div>
    <div class="list-user" v-if="!tableuser.loading">
      <ProfileListUserItem
        :user="user"
        v-for="user in tableuser.data"
        :key="user.id"
        :showDetail="showDetail"
        :verifikasi="verifikasi"
      />
    </div>
    <Loading :showMessage="false" v-else />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ListUser',
  data() {
    return {
      selectedUser: null,
    }
  },
  mounted() {
    this.fetchUserData()
  },
  computed: {
    ...mapState({
      tableuser: (state) => state.dashboard.users,
    }),
  },
  methods: {
    showDetail(user) {
      this.$store.dispatch('dashboard/setSelectedUser', user)
      this.$router.push('/profile/verification/' + user.email)
    },
    verifikasi(user) {
      alert('verifikasi user ' + user.fullname)
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

<style scoped lang="scss"></style>
