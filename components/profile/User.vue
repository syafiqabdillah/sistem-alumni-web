<template>
  <div>
    <div class="card" data-aos="fade-up">
      <div class="avatar" :key="imageKey">
        <img
          :src="avatarImageSrc"
          alt=""
          @error="setDefaultImage"
          ref="image"
        />
        <div class="edit" @click.self="openFileSelector">
          <i class="icofont-image" @click.self="openFileSelector"> </i>
          <input
            @input="inputProfilePicture"
            ref="file"
            class="inputfile"
            type="file"
            id="file"
          />
          <label for="file">Upload</label>
        </div>
      </div>
      <h2 class="title">
        {{ profile.fullname }}
      </h2>
      <small
        :class="{
          'text-center': 'text-center',
          status: 'status',
          green: verified,
          orange: !verified,
        }"
        v-if="!loadingVerified"
      >
        {{ verified ? 'Terverifikasi' : 'Menunggu verifikasi' }}
      </small>
      <Spacer />
      <RegisterReviewData v-if="profile" :data="profile" />
      <Loading :showMessage="false" v-else />
      <Spacer :height="1" />
      <small class="text-center">Ingin mengubah data?</small>
      <div class="button green" @click="hubungiAdmin">
        <i class="icofont-whatsapp"></i>
        Hubungi admin
      </div>
    </div>
    <ProfileUserChangePassword />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'User',
  data() {
    return {
      profilePicture: null,
      existingProfilePicture: null,
      defaultImage: require('~/assets/images/user.svg'),
      imageKey: null,
    }
  },
  methods: {
    edit() {
      this.setFormDataDiri()
    },
    setDefaultImage() {
      this.$refs.image.src = this.defaultImage
    },
    openFileSelector() {
      this.$refs.file.click()
    },
    loadProfilePicture() {
      this.imageKey = Date.now()
      this.existingProfilePicture = `/api/users/profile-picture?id=${
        this.$getJwtData()['id']
      }`
    },
    inputProfilePicture(e) {
      const file = e.target.files[0]
      this.profilePicture = file

      if (this.fileSizeValid(this.profilePicture)) {
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${this.$getCookieManager().get('jwt')}`,
          },
        }
        const id = this.$getJwtData()['id']
        var formData = new FormData()
        formData.append('file', this.profilePicture)
        this.$showModalLoading(this)
        this.$axios
          .post(`/api/users/upload-profile-picture?id=${id}`, formData, config)
          .then(() => {
            location.reload()
          })
          .catch((err) => {
            console.log(err)
          })
          .finally(() => {
            this.$hideModalLoading(this)
          })
      } else {
        alert('Ukuran gambar terlalu besar')
      }
    },
    fileSizeValid(file) {
      return file.size / 1024 / 1024 < 2
    },
    checkVerified() {
      this.$store.dispatch('profile/setLoadingVerified', true)
      this.$axios
        .post(`/api/users/check-verified`, {
          jwt: this.$getCookieManager().get('jwt'),
        })
        .then((res) => {
          this.$store.dispatch('profile/setVerified', res.data.verified)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          this.$store.dispatch('profile/setLoadingVerified', false)
        })
    },
    setFormDataDiri() {
      const formDataDiri = {
        fullname: this.profile.fullname,
        birthplace: this.profile.birthplace,
        birthdate: this.profile.birthdate,
        gender: this.profile.gender,
        phone: this.profile.phone,
        address: this.profile.address,
        parentName: this.profile.parent_name,
        parentPhone: this.profile.parent_phone,
      }
      this.$store.dispatch('datadiri/setForm', formDataDiri)
    },
    hubungiAdmin() {
      window.open(this.linkWhatsApp, '__blank')
    },
  },
  computed: {
    ...mapState({
      verified: (state) => state.profile.verified,
      loadingVerified: (state) => state.profile.loadingVerified,
    }),
    profile() {
      return this.$getJwtData()
    },
    linkWhatsApp() {
      return `https://wa.me/${this.$getAdminContact()}?text=Hai admin, saya ingin mengubah data alumni saya`
    },
    avatarImageSrc() {
      return this.existingProfilePicture
        ? this.existingProfilePicture
        : this.defaultImage
    },
  },
  mounted() {
    window.scroll(0, 0)
    this.loadProfilePicture()
    this.$setNavbarTitle(this, 'Profil Alumni')
    this.checkVerified()
  },
  beforeDestroy() {
    this.$resetNavbarTitle(this)
  },
}
</script>

<style scoped lang="scss">
.status {
  width: initial;
  padding: 0 1em;
  border-radius: 3px;
  color: var(--bg);

  &.green {
    background-color: var(--primary);
  }

  &.orange {
    background-color: darkorange;
  }
}
.avatar {
  height: calc(1.5 * var(--avatar-size));
  width: calc(1.5 * var(--avatar-size));
  margin: 1em auto;
  border-radius: 50%;
  position: relative;

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
    transition: 200ms all;
    background: lightgrey;
  }

  .edit {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--primary);
    opacity: 0;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
      background: var(--bg);
    }

    label {
      font-size: 0.8rem;
      cursor: pointer;
      font-weight: 500;
    }

    .inputfile {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }
  }
}
</style>
