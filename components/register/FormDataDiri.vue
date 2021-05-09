<template>
  <div class="card">
    <h1 class="title">Data Diri</h1>
    <InputField
      id="fullname"
      label="Nama lengkap"
      :value="form.fullname"
      :onChange="handleInputChange"
      :onBlur="validateInput"
      :valid="validation.fullname"
      errorMessage="nama tidak boleh kosong"
    />
    <InputField
      id="birthplace"
      label="Tempat lahir"
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
      id="parentName"
      label="Nama orangtua/wali"
      :value="form.parentName"
      :onChange="handleInputChange"
      :onBlur="validateInput"
      :valid="validation.parentName"
      :required="false"
    />

    <InputField
      id="parentPhone"
      label="No HP orangtua/wali"
      type="number"
      :value="form.parentPhone"
      :onChange="handleInputChange"
      :onBlur="validateInput"
      :valid="validation.parentPhone"
      :required="false"
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
  name: 'FormDataDiri',
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
    }
  },
  methods: {
    handleFullnameChange(e) {
      this.$store.dispatch('datadiri/setFullname', e.target.value)
    },
    handleInputChange(e) {
      const key = e.target.name
      const value = e.target.value
      this.$store.dispatch('datadiri/setInput', {
        key,
        value,
      })
    },
    validateInput(e) {
      const key = e.target.name
      const value = e.target.value
      this.$store.dispatch('datadiri/validateInput', {
        key,
        value,
      })
    },
    kembali() {
      this.$store.dispatch('register/setCurrentPage', 'email')
    },
    lanjutkan() {
      this.$store.dispatch('register/setCurrentPage', 'data alumni')
    },
  },
  computed: {
    ...mapState({
      form: (state) => state.datadiri.form,
      validation: (state) => state.datadiri.validation,
    }),
    formValid() {
      return (
        this.validation.fullname &&
        this.validation.birthplace &&
        this.validation.birthdate &&
        this.validation.phone &&
        this.validation.address
      )
    },
  },
  mounted() {},
}
</script>

<style scoped>
.card {
  max-width: 500px;
  margin: 0 auto;
}
</style>
