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
  },
  head() {
    return {
      title: this.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Sistem Alumni Yayasan Asy Syaamil Bontang',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss"></style>
