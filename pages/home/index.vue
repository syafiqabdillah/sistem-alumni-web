<template>
  <div class="home" >
    <HomeBanner data-aos="fade-up"/>
    <HomeActivity data-aos="fade-up"/>
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
