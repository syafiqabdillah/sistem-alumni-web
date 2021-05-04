<template>
  <section class="banner">
    <img src="~/assets/images/tajil.JPG" alt="" />
    <div class="blur"></div>
    <div class="text">
      <h1 class="title">
        Alumni Yayasan <br />
        Asy-Syaamil Bontang
      </h1>
      <div class="tagline">
        Bergabung dengan alumni Yayasan Asy-Syaamil lainnya dari TK, SD, SMP,
        hingga SMA
      </div>
      <div class="cta">
        <NuxtLink to="/register">Bergabung sekarang!</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.banner {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: var(--banner-height);

  @media (max-width: 500px) {
    height: 500px;
  }

  .title {
    text-align: left;
    margin-bottom: 0;
    font-size: 1.75rem;
    text-transform: uppercase;
  }
  .tagline {
    font-size: 1.15rem;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    filter: grayscale(1) brightness(.3);
  }

  .blur {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .text {
    padding: 1em;
    color: var(--bg);
    max-width: 45ch;
    display: flex;
    flex-direction: column;
    text-shadow: 0 0 24px black;

    gap: 1em;
    @media (min-width: 500px) {
      padding: 1em 5em;
      max-width: 65ch;
    }
  }
}
</style>
