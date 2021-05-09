<template>
  <div class="review-data">
    <RegisterReviewItem label="Nama lengkap" :value="data.fullname" />
    <RegisterReviewItem label="Email" :value="data.email" />
    <RegisterReviewItem
      label="TTL"
      :value="`${data.birthplace}, ${data.birthdate}`"
    />
    <RegisterReviewItem label="Gender" :value="data.gender == 1 ? 'Laki-laki' : 'Perempuan'" />
    <RegisterReviewItem label="No HP" :value="data.phone" />
    <RegisterReviewItem label="Alamat" :value="data.address" />
    <RegisterReviewItem
      label="Nama orangtua/wali"
      v-if="data.parentName"
      :value="data.parentName"
    />
    <RegisterReviewItem
      label="No HP orangtua/wali"
      v-if="data.parentPhone"
      :value="data.parentPhone"
    />
    <RegisterReviewItem
      label="Tahun masuk TKIT Qurrota A'yun"
      :value="data.year_entry_tk"
      v-if="data.year_entry_tk"
    />
    <RegisterReviewItem
      label="Tahun masuk SDIT Asy-Syaamil"
      :value="data.year_entry_sd"
      v-if="data.year_entry_sd"
    />
    <RegisterReviewItem
      label="Tahun masuk SMPIT Daarul Hikmah"
      :value="data.year_entry_smp"
      v-if="data.year_entry_smp"
    />
    <RegisterReviewItem
      label="Tahun masuk SMAIT Daarul Hikmah"
      :value="data.year_entry_sma"
      v-if="data.year_entry_sma"
    />
    <RegisterReviewItem label="Aktivitas" :value="data.activity" />
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>

<style scoped>
.review-data {
  width: 100%;
  max-width: 400px;
  padding: 1em 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>