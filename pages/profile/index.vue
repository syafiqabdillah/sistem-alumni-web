<template>
  <div class="profile" v-if="loggedIn">
    <div class="sidebar">
      <div class="menu">
        <i class="icofont-user"></i>
      </div>
    </div>
    <div class="content">
      <div class="card">
        <i class="icofont-user"></i>
        <RegisterReviewData
          :data="profile"
         />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  beforeMount() {
    if (!this.loggedIn) {
      this.$router.push('/')
    }
  },
  computed: {
    loggedIn() {
      return this.$loggedIn()
    },
    profile() {
      return this.$getJwtData()
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content {
  margin-left: 60px;
  padding: 3em 1em;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sidebar {
  position: fixed;
  max-width: 60px;
  height: 100%;
  padding: 20px 10px;
  background: var(--dark);

  .menu {
    width: 40px;
    height: 40px;
    background-color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-bottom: 1em;

    i {
      font-size: 20px;
      color: var(--bg);
    }
  }

  & > * {
    cursor: pointer;
  }
}
.profile {
  display: flex;
  height: calc(100vh - var(--nav-height));

  & > * {
    flex: 1;
  }
}
</style>
