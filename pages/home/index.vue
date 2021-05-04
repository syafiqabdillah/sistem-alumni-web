<template>
  <div class="home">
    <HomeBanner id="banner" />
    <HomeWhatWeDo />
    <client-only>
      <HomeCarousel />
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped lang="scss"></style>
