<template>
  <div class="list-user">
    <ProfileListUserItem
      :user="user"
      v-for="user in tableuser.data"
      :key="user.id"
      :showModalDetailUser="showModalDetailUser"
    />
    <ProfileModalDetailUser
      :user="selectedUser"
      v-if="selectedUser"
    />
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
    showModalDetailUser(user) {
      this.selectedUser = user;
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
