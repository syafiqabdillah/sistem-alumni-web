<template>
  <div class="navbar">
    <nav>
      <div class="brand" @click="toPage('/home')">
        <img src="~/assets/images/logo.jpeg" alt="" />
      </div>
      <div class="menu">
        <NuxtLink to="/home">Beranda</NuxtLink>
        <NuxtLink class="login" to="/login">Masuk</NuxtLink>
      </div>
      <div class="menu-mobile">
        <div
          :class="{ toggle: 'toggle', show: showMenuMobile }"
          @click="toggleShowMenuMobile"
        >
          <i :class="{ 'icofont-rounded-down': 'icofont-rounded-down' }"></i>
          <!-- <i class="icofont-rounded-up" v-else></i> -->
        </div>
        <div
          :class="{ dropdown: 'dropdown', show: showMenuMobile }"
          @click="toggleShowMenuMobile"
        >
          <NuxtLink to="/home">Beranda</NuxtLink>
          <NuxtLink v-if="!loggedIn" class="login" to="/login">Masuk</NuxtLink>
          <a href="#" v-else @click="logout">Keluar</a>
        </div>
        <div
          @click="toggleShowMenuMobile"
          :class="{ blur: 'blur', show: showMenuMobile }"
        ></div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenuMobile: false,
    }
  },
  methods: {
    toPage(path) {
      this.$router.push(path)
    },
    toggleShowMenuMobile() {
      this.showMenuMobile = !this.showMenuMobile
    },
    logout() {
      // hapus cookie
      this.$getCookieManager().remove('jwt')
      // alihkan ke beranda
      location.href = "/"
    },
  },
  computed: {
    activeShowMenuMobile() {
      return this.showMenuMobile ? ' active' : ''
    },
    loggedIn() {
      return this.$jwt();
    }
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
  min-width: var(--min-width-page);
}
nav {
  height: var(--nav-height);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 25%);
  padding: 1em;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: none;
  position: relative;
}
nav > * {
  cursor: pointer;
}
.brand img {
  height: 50px;
  width: auto;
  object-fit: contain;
}
.menu {
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 2em;

  @media (max-width: 500px) {
    display: none;
  }
  @media (min-width: 500px) {
    display: flex;
  }

  a {
    text-decoration: none;
    color: var(--dark);
    font-weight: 400;
  }
  a:hover {
    color: var(--primary);
  }
  .login {
    background: var(--primary);
    color: var(--bg);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }
  .login:hover {
    background: var(--primary-darker);
  }
}
.menu-mobile {
  @media (min-width: 500px) {
    display: none;
  }
}
.toggle {
  font-size: 2rem;
  color: var(--primary);
  transform: rotate(0deg);
  transition: transform 200ms linear;
  &.show {
    transform: rotate(180deg);
  }
}
.dropdown {
  position: absolute;
  width: 100%;
  top: var(--nav-height);
  left: 0;
  background-color: var(--bg);
  display: flex;
  flex-direction: column;
  padding: 0 1em 1em;
  gap: 1em;
  align-items: center;
  z-index: 99;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 200ms linear;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 25%);

  a {
    text-decoration: none;
    color: var(--dark);
    font-weight: 400;
    width: 100%;
    text-align: center;
  }
  a:hover,
  a:active {
    color: var(--primary);
  }
  .login {
    background: var(--primary);
    color: var(--bg);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }
  .login:hover,
  .login:active {
    background: var(--primary-darker);
  }
  &.show {
    transform: scaleY(1);
  }
}
.blur {
  background: rgba(0, 0, 0, 50%);
  position: absolute;
  top: var(--nav-height);
  left: 0;
  width: 100%;
  height: calc(100vh - var(--nav-height));
  transform: scaleY(0);
  transform-origin: top;
  transition: 100ms linear;

  &.show {
    transform: scaleY(1);
  }
}
</style>
