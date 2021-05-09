<template>
  <div class="dashboard">
    <div class="card">
      <h3 class="title">dashboard admin</h3>

      <!-- User Table -->
      <ProfileListUser />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  head() {
    return {
      title: "Dashboard Admin"
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  max-width: initial;
}
.title {
  margin-bottom: 1em;
}
</style>
