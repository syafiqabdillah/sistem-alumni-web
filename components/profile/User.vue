<template>
  <div class="card">
    <h3 class="title">profil alumni</h3>
    <RegisterReviewData :data="profile" />
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    profile() {
      return this.$getJwtData();
    }
  },
}
</script>

<style scoped lang="scss">
.title {
  margin-bottom: 1em;
}
</style>
