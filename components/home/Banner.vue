<template>
  <section class="banner">
    <img :src="currentImage.src" :alt="currentImage.alt">
    <!-- <div class="blur"></div> -->
    <div class="text">
      <h1 class="title">
        Alumni Yayasan <br />
        Asy Syaamil Bontang
      </h1>
      <div class="tagline">
        Menebar manfaat untuk sesama alumni, sekolah, dan masyarakat
      </div>
      <div class="cta">
        <NuxtLink :to="cta.link">{{cta.text}}</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner',
  transition: 'fade',
  data() {
    return {
      images: [
        {
          src: require('~/assets/images/baksos-warriors.jpg'),
          alt: 'Baksos Warriors',
        },
        {
          src: require('~/assets/images/baksos.jpg'),
          alt: 'Baksos',
        },
        {
          src: require('~/assets/images/rihlah.jpg'),
          alt: 'Rihlah',
        },
        {
          src: require('~/assets/images/rihlah1.jpg'),
          alt: 'Rihlah1',
        },
        {
          src: require('~/assets/images/rihlah2.jpg'),
          alt: 'Rihlah2',
        },
        {
          src: require('~/assets/images/tajil.jpg'),
          alt: 'Tajil',
        },
        {
          src: require('~/assets/images/tor.jpg'),
          alt: 'Tor',
        },
      ],
      currentIndex: 0,
    }
  },
  mounted() {
    this.getRandomImage()
  },
  methods: {
    getRandomImage() {
      this.currentIndex = Math.floor(Math.random() * this.images.length)
    },
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex]
    },
    cta() {
      return this.$loggedIn() ? {
        link: "/profile",
        text: "Ke Halaman Profil"
      } : {
        link: "/register",
        text: "Bergabung dengan Kami"
      }
    }
  },
}
</script>

<style scoped lang="scss">
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  background-color: var(--dark);
  filter: grayscale(1) brightness(0.3);
}
.banner {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;

  .text {
    padding: 1em;
    color: var(--bg);
    max-width: 45ch;
    display: flex;
    flex-direction: column;
    gap: 1em;

    @media (min-width: 500px) {
      padding: 1em 5em;
      max-width: 65ch;
    }
  }

  .title {
    text-align: left;
    margin-bottom: 0;
    font-size: 1.75rem;
    text-transform: uppercase;

    @media (min-width: 500px) {
      font-size: 2.5rem;
    }
  }

  .tagline {
    font-size: 1.15rem;
  }

}
</style>
