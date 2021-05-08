<template>
  <div class="dashboard">
    <div class="card">
      <h3 class="title">dashboard admin</h3>

      <!-- User Table -->
      <ProfileTableUser />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  max-width: initial;
}
</style>
