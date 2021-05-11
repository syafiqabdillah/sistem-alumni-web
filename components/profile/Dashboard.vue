<template>
  <div class="dashboard">
    <div class="card">
      <h3 class="title">dashboard admin</h3>
      <div class="tabs">
        <div :class="{
          tab: 'tab',
          active: true
        }" v-for="tab in tabs" :key="tab.text">
          {{ tab.text }}
        </div>
      </div>
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
      title: 'Dashboard Admin',
    }
  },
  data() {
    return {
      tabs: [
        {
          text: 'Belum terverifikasi',
        },
        {
          text: 'Terverifikasi',
        },
        {
          text: 'Tidak terverifikasi',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.title {
  margin-bottom: 1em;
}
.tabs {
  font-size: 14px;
  display: flex;
  justify-content: center;
  gap: 1em;
  margin-bottom: 1rem;
  overflow-x: scroll;
}
</style>
