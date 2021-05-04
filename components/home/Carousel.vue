<template>
  <section class="carousel">
    <vueper-slides autoplay pauseOnHover>
      <vueper-slide
        v-for="(slide, i) in slides"
        :key="i"
        :title="slide.title"
        :content="slide.content"
        :image="slide.image"
      />
    </vueper-slides>
  </section>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  name: 'Carousel',
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      slides: [
        {
          title: 'Bakti Sosial',
          image: require('~/assets/images/baksos.jpg')
        },
        {
          title: 'Lomba Hias Tumpeng',
          image: require('~/assets/images/rihlah.jpg')
        },
        {
          title: 'Tim Berbagi Tajil',
          image: require('~/assets/images/tajil.jpg')
        },
        {
          title: 'Reuni Alumni',
          image: require('~/assets/images/rihlah1.jpg')
        },
        {
          title: 'Tajil on the Road',
          image: require('~/assets/images/tor.jpg')
        },
        {
          title: 'Jalan-Jalan ke Beras Basah',
          image: require('~/assets/images/rihlah2.jpg')
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
</style>
