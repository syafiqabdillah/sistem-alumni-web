<template>
  <div class="avatar">
    <img :src="avatarImageSrc" alt="" @error="setDefaultImage" ref="image" />
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
</template>

<script>
import imageCompression from 'browser-image-compression'
export default {
  name: 'AvatarEditable',
  props: {
    user: Object,
    loadProfile: Function
  },
  data() {
    return {
      defaultImage: require('~/assets/images/user.svg'),
      existingProfilePicture: null,
      compressedImage: null
    }
  },
  methods: {
    openFileSelector() {
      this.$refs.file.click()
    },
    setDefaultImage() {
      this.$refs.image.src = this.defaultImage
    },
    fileSizeValid(file) {
      return file.size / 1024 / 1024 < 2
    },
    loadProfilePicture() {
      this.existingProfilePicture = this.user.profile_picture
        ? `/api/users/profile-picture?filename=${this.user.profile_picture}`
        : this.defaultImage
    },
    async inputProfilePicture(e) {
      const file = e.target.files[0]
      // console.log('before', file.size)
      await this.compressImage(file)
      // console.log('after', this.compressedImage.size)
      const newFile = new File([this.compressedImage], file.name)
      
      if (this.fileSizeValid(newFile)) {
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${this.$getCookieManager().get('jwt')}`,
          },
        }
        var formData = new FormData()
        formData.append('file', newFile)
        this.$showModalLoading(this)
        this.$axios
          .post(`/api/users/upload-profile-picture?id=${this.user.id}`, formData, config)
          .then(() => {
            this.$refs.image.src = URL.createObjectURL(newFile)
            this.$showModalSuccess(this, ['Berhasil ubah foto profil'])
            this.loadProfile()
          })
          .catch((err) => {
            console.log(err)
            this.$showModalError(this, ['Gagal ubah foto profil'], false)
          })
          .finally(() => {
            this.$hideModalLoading(this)
          })
      } else {
        alert('Ukuran gambar terlalu besar')
      }
    },
    async compressImage(file) {
      const options = {
        maxSizeMB: 1,
        useWebWorker: true,
      }
      try {
        this.compressedImage = await imageCompression(file, options)
      } catch (err) {
        alert('Gambar gagal dikompres. Hubungi admin.')
      }
    },
  },
  computed: {
    avatarImageSrc() {
      return this.existingProfilePicture
        ? this.existingProfilePicture
        : this.defaultImage
    },
  },
  mounted() {
    this.loadProfilePicture()
  },
}
</script>

<style scoped lang="scss">
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
