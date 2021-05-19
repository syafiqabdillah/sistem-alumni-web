<template>
  <div class="card" data-aos="fade-up" data-aos-offset="0">
   <div class="button white-green" @click="toChangePasswordPage">
     <i class="icofont-ui-password"></i>
     Ganti password
   </div>
  </div>
</template>

<script>
export default {
  methods: {
    toChangePasswordPage() {
      this.$router.push('/change-password')
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  margin-top: 1em;
}
.button {
  margin: 0;
}
</style>