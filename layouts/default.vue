<template>
  <div class="body">
    <Navbar />
    <div class="content">
      <Nuxt />
    </div>
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
}

.body {
  min-height: 100vh;
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

.content {
  margin-top: var(--nav-height);
  flex: 1;
}
</style>
