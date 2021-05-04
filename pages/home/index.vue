<template>
  <div class="home">
    <HomeBanner />
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
