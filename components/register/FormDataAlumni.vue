<template>
  <div class="card w-500">
    <h1 class="title">Data Alumni</h1>
    <!-- TK -->
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
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FormDataAlumni',
  data() {
    return {
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
      form: (state) => state.dataalumni.form,
    }),
    formValid() {
      return (
        !this.$isEmpty(this.form.activity) &&
        (this.form.year_entry_tk ||
          this.form.year_entry_sd ||
          this.form.year_entry_smp ||
          this.form.year_entry_sma)
      )
    },
  },
  methods: {
    kembali() {
      this.$store.dispatch('register/setCurrentPage', 'data diri')
    },
    lanjutkan() {
      this.$store.dispatch('register/setCurrentPage', 'review')
    },
    handleInputChange(e) {
      this.$store.dispatch('dataalumni/setInput', {
        key: e.target.name,
        value: e.target.value,
      })
    },
    getYearSeries(start, end, target) {
      for (var year = start; year < end; year++) {
        target.push({
          value: year,
          text: `${year} - Angkatan ${year - start + 1}`,
        })
      }
    },
    isEmpty(arr) {
      return arr.length == 0
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
    loadSelectedOptions() {},
  },
  mounted() {
    this.fillYearOptions()
    this.loadSelectedOptions()
  },
}
</script>

<style scoped>

</style>
