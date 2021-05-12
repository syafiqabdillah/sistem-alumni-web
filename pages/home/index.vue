<template>
  <div class="home">
    <HomeBanner/>
    <HomeActivity />
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    window.scroll(0, 0)
  }
}
</script>

<style scoped lang="scss"></style>
