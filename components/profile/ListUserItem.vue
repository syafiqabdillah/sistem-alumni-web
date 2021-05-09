<template>
  <div class="list-user-item" data-aos="fade-left">
    <div class="card">
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
      <div class="action">
        <div class="button grey" @click="showDetail(user)">
          <i class="icofont-ui-search"></i>
          detail
        </div>
        <div class="button" @click="verifikasi(user)">
          <i class="icofont-ui-check"></i>
          verifikasi
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
    showDetail: Function,
    verifikasi: Function
  },
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

  @media (max-width: 500px) {
    flex-direction: column;
  }

  &:hover {
    border-color: var(--primary);
  }
}
</style>
