<template>
  <div class="sidebar">
    <div
      v-for="menu in availableMenu"
      :key="menu.title"
      :class="{
        menu: 'menu',
        active: profile.activePage === menu.title,
      }"
      @click="chooseMenu(menu.title)"
    >
      <div class="menu-icon">
        <i :class="menu.icon"></i>
      </div>
      <div class="menu-text">
        {{ menu.text }}
      </div>
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
    chooseMenu(title) {
      if (this.profile.activePage !== title) {
        this.setActivePage(title)
        this.$router.push('/profile?page=' + title)
      }
    },
  },
  computed: {
    ...mapState({
      profile: (state) => state.profile,
    }),
    userData() {
      return this.$getJwtData()
    },
    availableMenu() {
      return this.$getJwtData()['is_admin']
        ? this.profile.menus
        : this.profile.menus.filter((menu) => {
            return menu.admin_only === false
          })
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: var(--nav-height);
  height: 100%;
  padding: 20px 10px;
  background-color: var(--bg);
}
.menu {
  display: flex;
  margin-bottom: 1em;
  align-items: center;
  transition: 200ms all;
  z-index: 2;

  &:hover {
    cursor: pointer;

    @media (min-width: 850px) {
      transform: translateX(8px);
    }
  }

  &.active {
    @media (min-width: 850px) {
      transform: translateX(8px);
    }

    .menu-icon {
      border: 2px solid var(--primary-lighter);
    }

    .menu-text {
      color: var(--primary);
      font-weight: 500;
    }
  }
}
.menu-icon {
  cursor: pointer;
  background-color: var(--bg);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 20px;
  color: var(--primary-lighter);
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid lightgray;
}

.menu-text {
  padding-left: 8px;
  font-size: 14px;
  width: 100px;
  height: 100%;

  @media (max-width: 850px) {
    display: none;
  }
}
</style>
