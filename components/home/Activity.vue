<template>
  <section class="activity">
    <h2 class="title">Kegiatan Alumni</h2>
    <div class="reasons">
      <div class="reason" v-for="activity in activitiies" :key="activity.title">
        <img :src="activity.image" alt="" />
        <p class="title">
          untuk <br />
          {{ activity.title }}
        </p>
        <p class="description">
          {{ activity.description }}
        </p>
      </div>
    </div>
    <div class="cta">
      <NuxtLink :to="cta.link">{{cta.text}}</NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Activity',
  data() {
    return {
      activitiies: [
        {
          title: 'sekolah',
          image: require('~/assets/images/school.svg'),
          description: 'Sosialisasi kampus',
        },
        {
          title: 'alumni',
          image: require('~/assets/images/alumni.svg'),
          description: 'Jalan-jalan alumni, Reuni antar angkatan',
        },
        {
          title: 'masyarakat',
          image: require('~/assets/images/charity.svg'),
          description: 'Tajil on the road, Bakti sosial',
        },
      ],
    }
  },
  computed: {
    cta() {
      return this.$loggedIn() ? {
        link: "/profile?page=user",
        text: "Ke Halaman Profil"
      } : {
        link: "/register",
        text: "Masuk Sebagai Alumni"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cta {
  display: flex;
  justify-content: center;
}
.activity {
  min-height: 400px;
  padding: 3em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title {
  margin-bottom: 1em;
  font-weight: 700;
}
.reasons {
  display: flex;
  width: 100%;
  max-width: 590px;
  margin: 0 auto;
  padding: 1em 0;

  & > * {
    flex: 1;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
}
.reason {
  margin-top: 1em;
  min-width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 0.9rem;

  @media (min-width: 500px) {
    font-size: 1rem;
  }

  &:hover img,
  &:focus img {
    transform: scale(1.3) translateY(-10px);
  }

  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    transition: 200ms all linear;
  }

  p.title {
    font-weight: 700;
    margin-top: 0.65rem;
    margin-bottom: 0.25rem;
    font-size: inherit;
    text-transform: uppercase;
  }
}
</style>
