<template>
  <div :class="{
    'avatar' : 'avatar',
    'small' : size === 'sm'
  }">
    <img ref="image" :src="srcImage" :alt="user.fullname" @error="setAltImage" />
  </div>
</template>

<script>
export default {
  name: "Avatar",
  data() {
    return {
      altImage: require('~/assets/images/user.svg')
    }
  },
  props: {
    user: Object,
    size: String
  },
  methods: {
    setAltImage(e) {
      this.$refs.image.src = this.altImage
    }
  },
  computed: {
    srcImage() {
      return `/api/users/profile-picture?id=${this.user.id}`
    }
  }
}
</script>

<style scoped lang="scss">
.avatar {
  height: calc(1.5 * var(--avatar-size));
  width: calc(1.5 * var(--avatar-size));
  margin: 1em auto;
  border-radius: 50%;
  position: relative;

  &.small {
    height: calc(.5 * var(--avatar-size));
    width: calc(.5 * var(--avatar-size));
  }

  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
    transition: 200ms all;
    background-image: url('~/assets/images/user.svg');
  }
}
</style>
