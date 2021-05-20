<template>
  <div class="empty-state" data-aos="fade-up">
    <img :src="src" alt="Not found">
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name: "EmptyState",
  props: {
    text: {
      type: String,
      default: "Data tidak ditemukan"
    }
  },
  data() {
    return {
      src: require('~/assets/icons/empty-happy.svg')
    }
  }
}
</script>

<style scoped lang="scss">
.empty-state {
  height: 100%;
  min-height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
p {
  margin-top: 1em;
  color: grey;
}
img {
  height: 100px;
  width: 100px;
}
</style>