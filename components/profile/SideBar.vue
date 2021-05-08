<template>
  <div class="sidebar">
    <div
      :class="{
        menu: 'menu',
        active: profile.activePage === menu.title,
      }"
      data-aos="fade-right"
      v-for="menu in profile.menus"
      :key="menu.title"
      @click="setActivePage(menu.title)"
    >
      <i :class="menu.icon"></i>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Sidebar',
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      setActivePage: 'profile/setActivePage',
    }),
  },
  computed: {
    ...mapState({
      profile: (state) => state.profile,
    }),
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  max-width: 60px;
  height: 100%;
  padding: 20px 10px;
  background-color: var(--bg);

  .menu {
    cursor: pointer;
    background-color: var(--bg);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-bottom: 1em;
    font-size: 20px;
    color: var(--primary-lighter);
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.active {
      border: 2px solid var(--primary-lighter);
    }
  }

  & > * {
    cursor: pointer;
  }
}
</style>
