<template>
  <div class="card unit" data-aos="fade-up" data-aos-offset="0">
    <img :src="unit.src" :alt="unit.name" />
    <div class="text">
      <div class="name">
        {{ unit.name }}
      </div>
      <div class="count">
        <span v-if="count">
          <span class="bold"> {{ count }}</span> alumni terdaftar</span
        >
        <div v-else>...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherAlumniUnits',
  data() {
    return {
      count: null,
    }
  },
  props: {
    unit: Object,
  },
  mounted() {
    this.count = null
    this.$axios
      .get(`users/alumni-count?unit=${this.unit.key}`)
      .then((res) => {
        this.count = res.data.count
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {})
  },
}
</script>

<style scoped lang="scss">
.card {
  box-shadow: none;
}
.unit {
  position: relative;
  height: 140px;

  .text {
    z-index: 1;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;

    .count {
      display: flex;
      align-items: flex-end;
      text-align: right;
      justify-content: flex-end;

      .bold {
        font-size: 1.65rem;
        margin: 0;
      }
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1) brightness(0.3);
  }

  &:hover,
  &:active {
    transform: scale(0.9);
    cursor: pointer;

    .text {
      display: none;
    }

    img {
      filter: none;
    }
  }
}
</style>
