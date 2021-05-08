<template>
  <div id="app">
    <Navbar />
    <div style="margin-top: var(--nav-height); width: 100%; flex: 1">
      <Nuxt />
    </div>
    
    <ModalLoading />
    <Modal />

    <Footer />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

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
}

#app {
  height: 100vh;
  min-width: var(--min-width-page);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
