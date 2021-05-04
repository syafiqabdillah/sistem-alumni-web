<template>
  <section class="what-we-do">
    <h2 class="title">Kegiatan Alumni</h2>
    <div class="reasons">
      <div class="reason" v-for="reason in reasons" :key="reason.title">
        <img :src="reason.image" alt="" />
        <p class="title">{{ reason.title }}</p>
        <p class="description">
          {{ reason.description }}
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
      reasons: [
        {
          title: 'untuk sekolah',
          image: require('~/assets/images/school.svg'),
          description: 'Sosialisasi kampus',
        },
        {
          title: 'untuk alumni',
          image: require('~/assets/images/alumni.svg'),
          description: 'Jalan-jalan alumni, Reuni antar angkatan',
        },
        {
          title: 'untuk masyarakat',
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
  font-size: 14px;

  &:hover img,
  &:focus img {
    transform: scale(1.2) translateY(-10px);
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    transition: 200ms all linear;
  }

  p.title {
    margin-top: 0.65rem;
    margin-bottom: 0.25rem;
    font-size: inherit;
    line-height: 1.6em;
    min-height: 3.2em;

    @media (min-width: 450px) {
      min-height: 0;
    }
  }
}
</style>
