<template>
  <div class="modal" v-if="modal.showModal" @click.self="close">
    <div class="modal-content" data-aos="fade-up">
      <span id="close" @click="close">
        <i class="icofont-close"></i>
      </span>
      <div class="modal-body">
        <i
          class="icofont-check-circled"
          style="color: var(--primary)"
          v-if="modal.isModalSuccess"
        ></i>
        <i
          class="icofont-close-squared"
          style="color: red"
          v-if="modal.isModalError"
        ></i>
        <p>{{ modal.message }}</p>
        <p v-for="message in modal.messages" :key="message">{{ message }}</p>
        <hr v-if="modal.showShareSocial" />
        <div class="shares" v-if="modal.showShareSocial">
          <p>Ajak teman yang lain</p>
          <div class="socials">
            <div class="social" v-for="social in socials" :key="social.name">
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
        <div class="hubungi-admin" @click="hubungiAdmin" v-if="modal.isModalError">
          <i class="icofont-whatsapp"></i>
          Hubungi admin
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      socials: [
        {
          name: 'whatsapp',
          icon: 'icofont-whatsapp',
          color: '#1CA951',
        },
        {
          name: 'facebook',
          icon: 'icofont-facebook',
          color: '#1160C1',
        },
      ],
    }
  },
  props: {
    showCloseButton: {
      type: Boolean,
      default: true,
    },
    hideOnClickBackdrop: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    close() {
      this.$store.dispatch('modal/resetModal')
    },
    hubungiAdmin() {
      const url = this.$getAdminWhatsappContact()
      window.open(url, '_blank')
    }
  },
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

<style lang="scss" scoped>
.modal {
  display: flex; /* Hidden by default */
  justify-content: center;
  align-items: center;
  position: fixed; /* Stay in place */
  z-index: 100; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.modal-content {
  background-color: var(--bg);
  margin: 15% 1em; /* 15% from the top and centered */
  padding: 1em;
  border: 1px solid var(--grey);
  border-radius: 0.5rem;
  width: 420px; /* Could be more or less, depending on screen size */
  max-height: 48%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.modal-body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 1em;
  text-align: center;

  i {
    font-size: 2.5em;
    margin-bottom: 0.5em;

    .success {
      color: var(--primary);
    }

    .error {
      color: red;
    }
  }
}
h2 {
  font-weight: 500;
}
#close:hover {
  cursor: pointer;
}
.shares {
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
.hubungi-admin {
  color: var(--primary);
  i {
    font-size: 1rem;
  }
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
