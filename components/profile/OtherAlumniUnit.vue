<template>
  <div
    class="card unit"
    data-aos="fade-up"
    data-aos-offset="0"
    @click="toAlumniPage(unit.key)"
  >
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
    <div v-if="isVerifiedAlumni" class="to-alumni-page button green">
      Lihat Halaman Alumni
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'OtherAlumniUnits',
  data() {
    return {
      count: null,
      isVerified: null,
    }
  },
  props: {
    unit: Object,
  },
  computed: {
    ...mapState({
      verified: (state) => state.profile.verified,
    }),
    isVerifiedAlumni() {
      return (
        this.$getJwtData()[`year_entry_${this.unit.key}`] && this.verified
      )
    },
  },
  mounted() {
    this.loadCount()
    
  },
  methods: {
    loadCount() {
      this.count = null
      this.$axios
        .get(`/api/users/alumni-count?unit=${this.unit.key}`)
        .then((res) => {
          this.count = res.data.count
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {})
    },
    toAlumniPage(unitKey) {
      if (this.isVerifiedAlumni) {
        this.$router.push(`/unit?code=${unitKey}`)
      }
    },
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
  transition: 200ms all;

  .text {
    z-index: 1;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: space-between;
    font-size: 0.8rem;

    .count {
      display: flex;
      align-items: flex-end;
      text-align: right;
      justify-content: flex-end;
      font-weight: 500;

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

  .to-alumni-page {
    display: none;
    position: absolute;
    margin: 0;
    border-radius: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 75%;
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

    .to-alumni-page {
      display: block;
    }
  }
}
</style>
