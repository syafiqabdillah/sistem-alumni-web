<template>
  <div class="bottom-menu">
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
  name: 'BottomMenu',
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

<style scoped lang="scss">
.bottom-menu {
  position: fixed;
  z-index: 1;
  left: 0;
  bottom: 0;
  width: 100%;
  height: var(--nav-height);
  background-color: var(--bg);
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0 -4px 4px rgba(0, 0, 0, .25);

  @media (min-width: 500px) {
    display: none;
  }
}
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    .menu-icon {
      color: var(--primary);
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
  color: grey;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-text {
  font-size: 14px;
  text-align: center;
}
</style>
