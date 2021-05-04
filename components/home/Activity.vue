<template>
  <section class="what-we-do">
    <h2 class="title">Kegiatan Alumni Untuk...</h2>
    <div class="reasons">
      <div class="reason" v-for="activity in activitiies" :key="activity.title">
        <img :src="activity.image" alt="" />
        <p class="title">{{ activity.title }}</p>
        <p class="description">
          {{ activity.description }}
        </p>
      </div>
    </div>
    <h2 class="title"></h2>
  </section>
</template>

<script>
export default {
  name: 'WhatWeDo',
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
}
</script>

<style lang="scss" scoped>
section {
  padding: 2em 1em;
}
.reasons {
  display: flex;
  max-width: 590px;
  margin: 0 auto;
  padding: 1em 0;

  & > * {
    flex: 1;
  }
}
.reason {
  margin-top: 1em;
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: .9rem;

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
    margin-top: 0.65rem;
    margin-bottom: 0.25rem;
    font-size: inherit;
    text-transform: uppercase;
  }
}
</style>
