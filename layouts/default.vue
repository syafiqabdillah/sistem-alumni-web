<template>
  <div id="app">
    <Navbar v-if="showNavbar" />
    <div style="width: 100%; height: var(--nav-height)" v-if="showNavbar"></div>
    <div class="body">
      <Nuxt />
    </div>

    <ModalLoading />
    <Modal />
    <ModalConfirmation />
    <Footer />
  </div>
</template>

<script>
export default {
  computed: {
    showNavbar() {
      return !this.$route.name.includes('home')
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap');

html,
body {
  font-family: 'Poppins', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  margin: 0;
  display: table;
  /* background-color: var(--bg); */
}

h1, h2, h3, h5 {
  font-family: 'Lato';
  font-weight: 700;
}

body {
  background-color: var(--bg);
}

#app {
  min-height: 100vh;
  min-width: 300px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.body {
  flex: 1;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
