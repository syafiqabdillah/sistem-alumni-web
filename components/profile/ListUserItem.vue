<template>
  <div class="list-user-item" data-aos="fade-up" data-aos-offset="0">
    <div class="card">
      <div class="left">
        <div class="avatar">
        <div class="image-container">
          <img :src="avatarImageSrc" alt="">
        </div>
      </div>
      <div class="detail">
        <div class="fullname">
          {{ user.fullname }}
        </div>
        <div class="year-entries">
          <div class="year-entry" v-if="user.year_entry_tk">
            Angkatan {{ user.year_entry_tk }} TKIT Qurrota A'yun
          </div>
          <div class="year-entry" v-if="user.year_entry_sd">
            Angkatan {{ user.year_entry_sd }} SDIT Asy Syaamil
          </div>
          <div class="year-entry" v-if="user.year_entry_smp">
            Angkatan {{ user.year_entry_smp }} SMPIT Daarul Hikmah
          </div>
          <div class="year-entry" v-if="user.year_entry_sma">
            Angkatan {{ user.year_entry_sma }} SMAIT Daarul Hikmah
          </div>
        </div>
      </div>
      </div>
      <div class="action">
        <div class="button grey sm" @click="showDetail(user)">
          <i class="icofont-ui-search"></i>
          detail
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListUserItem',
  props: {
    user: Object,
  },
  data() {
    return {
      existingImage: null,
      defaultImage: require('~/assets/images/user.svg')
    }
  },
  methods: {
    showDetail(user) {
      this.$store.dispatch('dashboard/setSelectedUser', user)
      this.$router.push('/profile/detail/' + user.email)
    },
    loadImage() {
      this.existingImage = `/api/users/profile-picture?filename=${this.user.profile_picture}`
    }
  },
  mounted() {
    this.loadImage();
  },
  computed: {
    avatarImageSrc() {
      return this.user.profile_picture ? this.existingImage : this.defaultImage
    }
  }
}
</script>

<style scoped lang="scss">

.year-entries {
  margin: 0.5rem 0;
}
.year-entry {
  color: grey;
  font-size: 12px;

  &::before {
    content: '-';
  }
}
.action {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}
.list-user-item {
  width: 100%;
  margin-bottom: .5em;
}
.card {
  box-shadow: none;
  max-width: none;
  border: 2px solid lightgray;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: space-between;
  transition: all 200ms;
  padding: 1em;

  @media (max-width: 650px) {
    flex-direction: column;

    .button {
      margin-top: 0;
    }
  }

  &:hover {
    border-color: var(--primary-lighter);
  }
}
.left {
  display: flex;
  gap: 1em;
}
.avatar {
  height: inherit;
  width: var(--avatar-size);
  display: flex;
  align-items: center;
  .image-container {
    width: var(--avatar-size);
    height: var(--avatar-size);
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
}
</style>
