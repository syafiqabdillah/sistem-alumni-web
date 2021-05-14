<template>
  <footer>
    <div class="copyright">&copy; 2021 Yayasan Asy-Syaamil Bontang</div>
    <div class="contact-us">
      Hubungi kami
      <i class="icofont-whatsapp"></i>
      <a :href="linkWhatsApp" target="_blank">+62852 4990 3865</a>
    </div>
    <div class="socials">
      <a href="http://www.asy-syaamil.com" target="_blank"
        >www.asy-syaamil.com<i class="icofont-external-link"></i
      ></a>
    </div>
    <div class="footer-padding"></div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    linkWhatsApp() {
      return `https://wa.me/${this.$getAdminContact()}?text=Hai admin, saya ingin bertanya`
    },
  },
}
</script>

<style scoped lang="scss">
footer {
  flex: 0;
  display: table-row;

  min-height: var(--footer-height);
  padding: 1em;
  width: 100%;
  background-color: var(--dark);
  color: var(--bg);
  text-align: center;
  font-size: 14px;
  display: flex;
  gap: 1em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 500px) {
    margin-bottom: var(--nav-height);
  }
}
a {
  text-decoration: none;
  color: var(--primary-lighter);

  &:hover {
    text-decoration: underline;
  }
}
i {
  margin-left: 5px;
}
.footer-padding {
  position: absolute;
  background-color: var(--dark);
  bottom: calc(0px - var(--nav-height));
  left: 0;
  width: 100%;
  height: var(--nav-height);

  @media (min-width: 500px) {
    display: none;
  }
}
</style>
