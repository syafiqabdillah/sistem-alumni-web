<template>
  <div class="loading" data-aos="zoom-in">
    <div class="rotating-thingy">
      <img :src="ring.inner" alt="" class="inner-ring" />
      <img :src="ring.outer" alt="" class="outer-ring" />
    </div>

    <p v-if="showMessage">{{message}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ring: {
        inner: require('~/assets/images/inner ring.svg'),
        outer: require('~/assets/images/outer ring.svg'),
      },
    }
  },
  props: {
    message: {
      type: String,
      default: "Mohon tunggu..."
    },
    showMessage: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "md"
    }
  }
}
</script>

<style scoped lang="scss">
.loading {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2em;
  justify-content: center;
  align-items: center;
  position: relative;

  .rotating-thingy {
    position: relative;
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      position: absolute;
      margin: 0 auto;
      left: 0;
      right: 0;

      &.inner-ring {
        height: 30px;
        width: 30px;
        animation: rotate 1s linear infinite;
      }
      &.outer-ring {
        height: 50px;
        width: 50px;
        animation: rotate 1.5s ease-in-out infinite;
      }
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  p {
    margin: 0;
  }
}
</style>
