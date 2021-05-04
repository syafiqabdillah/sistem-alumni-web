<template>
  <section class="activity">
    <div class="carousel-container">
      <VueSlickCarousel v-bind="carouselSettings">
        <div v-for="image in images" :key="image" class="image-carousel">
          <img :src="image" alt="" />
        </div>
      </VueSlickCarousel>
    </div>
  </section>
</template>

<script scoped>
import VueSlickCarousel from 'vue-slick-carousel'
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      carouselSettings: {
        dots: true,
        dotsClass: 'slick-dots my-dots',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        // autoplay: true,
        infinite: true,
      },
      images: [
        require('~/assets/images/act_baksos.JPG'),
        require('~/assets/images/act_tajil.JPG'),
        require('~/assets/images/act_rihlah (1).JPG'),
        require('~/assets/images/act_rihlah (2).JPG'),
        require('~/assets/images/act_rihlah (3).JPG'),
      ],
    }
  },
}
</script>

<style scoped>
.activity {
  height: 400px;
  background: black;
  padding: 3em;
  display: flex;
  justify-content: center;
}
.carousel-container {
  width: 70%;
}
.image-carousel img {
  height: 300px;
  width: 100%;
  object-fit: cover;
  padding: 1em;
}

</style>
