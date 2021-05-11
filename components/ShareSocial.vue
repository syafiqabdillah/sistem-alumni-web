<template>
  <div class="shares">
    <p>Ajak teman yang lain</p>
    <div class="socials">
      <div class="social" v-for="social in modal.socials" :key="social.name">
        <ShareNetwork
          :network="social.name"
          :url="host"
          title="Bergabung ke komunitas alumni yayasan Asy Syaamil (TK, SD, SMP, SMA)"
          description="Bersama alumni, kita menebar kebermanfaatan untuk alumni, sekolah, dan masyarakat"
        >
          <i :class="social.icon" :style="'color: ' + social.color"></i>
        </ShareNetwork>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ShareSocial',
  computed: {
    ...mapState({
      modal: (state) => state.modal,
    }),
    host() {
      return process.env.isProduction ? window.location.host : 'www.google.com'
    },
  },
}
</script>

<style scoped lang="scss">
.shares {
  text-align: center;

  .socials {
    display: flex;
    justify-content: center;
    gap: 1.5em;
  }
  .social {
    margin-top: 1em;
  }
  a {
    text-decoration: none;
  }
  i {
    font-size: 2rem;
  }
}
</style>
