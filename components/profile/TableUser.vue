<template>
  <div class="table-user">
    <vue-good-table
      :columns="tableuser.columns"
      @on-selected-rows-change="selectionChanged"
      :fixed-header="true"
      :rows="tableuser.data"
      :select-options="{
        enabled: true,
      }"
      :loading="tableuser.loading"
      :search-options="{ enabled: true }"
      :isLoading="tableuser.loading"
    >
      <div slot="selected-row-actions">
        <button>Action 1</button>
      </div>
      <!-- Loading State -->
      <template slot="loadingContent">
        Loading
      </template>
    </vue-good-table>
  </div>
</template>

<script scoped>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'TableUser',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      tableuser: (state) => state.dashboard.users,
    }),
  },
  mounted() {
    this.fetchUserData()
  },
  methods: {
    selectionChanged() {
      console.log('eyo')
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
.card {
  width: 100%;
  z-index: -100;
}
</style>
