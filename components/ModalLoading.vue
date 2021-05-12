<template>
  <div class="modal" v-if="modal.showModalLoading">
    <div class="modal-content" data-aos="fade-up">
      <div class="modal-body">
        <div class="rotating-thingy">
          <img :src="ring.inner" alt="" class="inner-ring" />
          <img :src="ring.outer" alt="" class="outer-ring" />
        </div>

        <p>Harap menunggu...</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
    showCloseButton: {
      type: Boolean,
      default: true,
    },
    message: {
      type: String,
      default: '',
    },
    hideOnClickBackdrop: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    close() {
      console.log('closing modal')
    },
  },
  computed: {
    ...mapState({
      modal: (state) => state.modal,
    }),
  },
}
</script>

<style lang="scss" scoped>
.modal {
  display: flex; /* Hidden by default */
  justify-content: center;
  align-items: center;
  position: fixed; /* Stay in place */
  z-index: 100; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.modal-content {
  background-color: var(--bg);
  margin: auto; /* 15% from the top and centered */
  padding: 1em;
  border: 1px solid var(--grey);
  border-radius: 0.5rem;
  width: 300px; /* Could be more or less, depending on screen size */
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.modal-body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    padding-left: .5em;
    margin: 0;
  }

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
}
h2 {
  font-weight: 500;
  margin-left: .5rem;
}
</style>
