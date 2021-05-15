<template>
  <div class="edit" data-aos="fade-up">
    <div class="text-center">
      {{ form.fullname }}
    </div>

    <InputField
      id="email"
      label="Email"
      type="email"
      :value="form.email"
      :onChange="() => {}"
      :onBlur="() => {}"
      :valid="null"
      :disabled="true"
    />

    <InputField
      id="fullname"
      label="Nama lengkap"
      type="text"
      :value="form.fullname"
      :onChange="handleInputChange"
      :onBlur="validateInput"
      :valid="validation.fullname"
      errorMessage="nama tidak boleh kosong"
    />

    <InputField
      id="birthplace"
      label="Tempat lahir"
      type="text"
      :value="form.birthplace"
      :onChange="handleInputChange"
      :onBlur="validateInput"
      :valid="validation.birthplace"
      errorMessage="tempat lahir tidak boleh kosong"
    />

    <InputField
      id="birthdate"
      label="Tanggal lahir"
      type="date"
      :value="form.birthdate"
      :onChange="handleInputChange"
      :onBlur="validateInput"
      :valid="validation.birthdate"
      errorMessage="tanggal lahir tidak boleh kosong"
    />

    <RadioGroup
      :onChange="handleInputChange"
      label="Gender"
      name="gender"
      :options="genderOptions"
      :value="form.gender"
    />

    <InputField
      id="phone"
      label="No HP"
      type="number"
      :value="form.phone"
      :onChange="handleInputChange"
      :onBlur="validateInput"
      :valid="validation.phone"
      errorMessage="no HP tidak sesuai format"
    />
    <InputField
      id="address"
      label="Alamat lengkap"
      type="textarea"
      :value="form.address"
      :onChange="handleInputChange"
      :onBlur="validateInput"
      :valid="validation.address"
      errorMessage="alamat tidak boleh kosong"
    />
    <InputField
      id="parent_name"
      label="Nama orangtua/wali"
      :value="form.parent_name"
      :onChange="handleInputChange"
      :onBlur="validateInput"
      :valid="validation.parentName"
      :required="false"
    />

    <InputField
      id="parent_phone"
      label="No HP orangtua/wali"
      type="number"
      :value="form.parent_phone"
      :onChange="handleInputChange"
      :onBlur="validateInput"
      :valid="validation.parentPhone"
      :required="false"
    />
    <SelectField
      label="Tahun masuk TKIT Qurrota A'yun"
      name="year_entry_tk"
      :value="form.year_entry_tk"
      :onChange="handleInputChange"
      :options="year_entry_options_tk"
    />
    <!-- SD -->
    <SelectField
      label="Tahun masuk SDIT Asy-Syaamil"
      name="year_entry_sd"
      :value="form.year_entry_sd"
      :onChange="handleInputChange"
      :options="year_entry_options_sd"
    />
    <!-- SMP -->
    <SelectField
      label="Tahun masuk SMPIT Daarul Hikmah"
      name="year_entry_smp"
      :value="form.year_entry_smp"
      :onChange="handleInputChange"
      :options="year_entry_options_smp"
    />
    <!-- SMA -->
    <SelectField
      label="Tahun masuk SMAIT Daarul Hikmah"
      name="year_entry_sma"
      :value="form.year_entry_sma"
      :onChange="handleInputChange"
      :options="year_entry_options_sma"
    />
    <InputField
      id="activity"
      label="Aktivitas saat ini"
      type="textarea"
      :value="form.activity"
      :onChange="handleInputChange"
      :onBlur="() => {}"
      placeholder="Ceritakan aktivitas kamu saat ini"
    />
    <Navigator
      :backFunction="kembali"
      :nextFunction="lanjutkan"
      :nextDisabled="!formValid"
      nextText="Update"
      :showNextIcon="false"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      genderOptions: [
        {
          id: 'male',
          value: 1,
          label: 'Laki-laki',
        },
        {
          id: 'female',
          value: 0,
          label: 'Perempuan',
        },
      ],
      year_entry_options_tk: [],
      year_entry_options_sd: [],
      year_entry_options_smp: [],
      year_entry_options_sma: [],
      year_entry_first_tk: 2010,
      year_entry_first_sd: 2003,
      year_entry_first_smp: 2009,
      year_entry_first_sma: 2013,
    }
  },
  computed: {
    ...mapState({
      form: (state) => state.userconfig.form,
      validation: (state) => state.userconfig.validation,
    }),
    formValid() {
      return true
    },
  },
  methods: {
    handleInputChange(e) {
      this.$store.dispatch('userconfig/setInput', {
        key: e.target.name,
        value: e.target.value,
      })
    },
    validateInput(e) {
      this.$store.dispatch('userconfig/validate', {
        key: e.target.name,
        value: e.target.value,
      })
    },
    kembali() {
      this.$store.dispatch('userconfig/setActivePage', 'list')
      this.$store.dispatch('userconfig/reset')
    },
    lanjutkan() {
      this.$showModalLoading(this)
      var form = Object.assign({}, this.form)
      console.log(JSON.stringify(form))
      this.$axios
        .post(`users/update`, form)
        .then((res) => {
          this.$showModalSuccess(this, [
            'Berhasil update user',
            'Mengalihkan ke halaman user config',
          ])
          setTimeout(() => {
            this.$resetModal(this)
            this.$store.dispatch('userconfig/setActivePage', 'list')
            this.$store.dispatch('userconfig/reset')
          }, 2000)
        })
        .catch((err) => {
          this.$showModalError(this, ['Gagal update user', err])
        })
        .finally(() => {
          this.$hideModalLoading(this)
        })
    },
    isEmpty(arr) {
      return arr.length == 0
    },
    getYearSeries(start, end, target) {
      for (var year = start; year < end; year++) {
        target.push({
          value: year,
          text: `${year} - Angkatan ${year - start + 1}`,
        })
      }
    },
    fillYearOptions() {
      const thisYear = new Date().getFullYear()
      // TK
      if (this.isEmpty(this.year_entry_options_tk)) {
        this.getYearSeries(
          this.year_entry_first_tk,
          thisYear,
          this.year_entry_options_tk
        )
      }

      // SD
      if (this.isEmpty(this.year_entry_options_sd)) {
        this.getYearSeries(
          this.year_entry_first_sd,
          thisYear,
          this.year_entry_options_sd
        )
      }

      // SMP
      if (this.isEmpty(this.year_entry_options_smp)) {
        this.getYearSeries(
          this.year_entry_first_smp,
          thisYear,
          this.year_entry_options_smp
        )
      }

      // SMA
      if (this.isEmpty(this.year_entry_options_sma)) {
        this.getYearSeries(
          this.year_entry_first_sma,
          thisYear,
          this.year_entry_options_sma
        )
      }
    },
  },
  mounted() {
    this.fillYearOptions()
    this.$store.dispatch('userconfig/setInput', {
      key: 'jwt',
      value: this.$getCookieManager().get('jwt'),
    })
    window.scroll(0, 0)
  },
  beforeDestroy() {
    this.$store.dispatch('userconfig/reset')
    this.$store.dispatch('userconfig/setActivePage', 'list')
  },
}
</script>

<style></style>
