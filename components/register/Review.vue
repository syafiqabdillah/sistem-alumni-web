<template>
  <div class="card">
    <h1 class="title">Review Form <br> Pendataan Alumni</h1>
    <RegisterReviewItem label="Nama lengkap" :value="datadiri.fullname" />
    <RegisterReviewItem label="Email" :value="register.email" />
    <RegisterReviewItem
      label="TTL"
      :value="`${datadiri.birthplace}, ${datadiri.birthdate}`"
    />
    <RegisterReviewItem label="Gender" :value="1 ? 'Laki-laki' : 'Perempuan'" />
    <RegisterReviewItem label="No HP" :value="datadiri.phone" />
    <RegisterReviewItem label="Alamat" :value="datadiri.address" />
    <RegisterReviewItem
      label="Nama orangtua/wali"
      v-if="datadiri.parentName"
      :value="datadiri.parentName"
    />
    <RegisterReviewItem
      label="No HP orangtua/wali"
      v-if="datadiri.parentPhone"
      :value="datadiri.parentPhone"
    />
    <RegisterReviewItem
      label="Tahun masuk TKIT Qurrota A'yun"
      :value="dataalumni.year_entry_tk"
      v-if="dataalumni.year_entry_tk"
    />
    <RegisterReviewItem
      label="Tahun masuk SDIT Asy-Syaamil"
      :value="dataalumni.year_entry_sd"
      v-if="dataalumni.year_entry_sd"
    />
    <RegisterReviewItem
      label="Tahun masuk SMPIT Daarul Hikmah"
      :value="dataalumni.year_entry_smp"
      v-if="dataalumni.year_entry_smp"
    />
    <RegisterReviewItem
      label="Tahun masuk SMAIT Daarul Hikmah"
      :value="dataalumni.year_entry_sma"
      v-if="dataalumni.year_entry_sma"
    />
    <RegisterReviewItem
      label="Aktivitas"
      :value="dataalumni.activity"
    />
    <div class="konfirmasi">
      <input
        type="checkbox"
        id="konfirmasi"
        v-model="confirmed"
        :checked="confirmed"
      />
      <label for="konfirmasi">
        Saya menyatakan bahwa telah <br />
        <b>mengisi form pendataan alumni</b> <br />
        dengan
        <b> sebenar-benarnya</b>
      </label>
    </div>
    <Navigator
      :backFunction="kembali"
      :showBackButton="!formValid"
      :nextDisabled="!formValid"
      :nextFunction="submit"
      nextText="Submit"
      :showNextIcon="false"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Review',
  data() {
    return {
      confirmed: false,
    }
  },
  computed: {
    ...mapState({
      register: (state) => state.register.form,
      datadiri: (state) => state.datadiri.form,
      dataalumni: (state) => state.dataalumni.form,
    }),
    formValid() {
      return this.confirmed
    },
  },
  methods: {
    kembali() {
      this.$store.dispatch('register/setCurrentPage', 'data alumni')
    },
    submit() {
      alert('eyo')
    },
  },
}
</script>

<style scoped lang="scss">
.konfirmasi {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 1em;

  input {
    width: 20px;
    height: 20px;
    margin-top: 0;
  }

  label {
    width: initial;
    flex: 1;
  }
}
</style>
