<template>
  <div class="card">
    <h1 class="title">
      Review Form <br />
      Pendataan Alumni
    </h1>
    <RegisterReviewData
      :data="Object.assign(register, datadiri, dataalumni)"
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
      loadingRegister: true,
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
    showModalSuccess() {
      this.$store.dispatch(
        'modal/setMessage',
        'Berhasil mendaftar sebagai alumni'
      )
      this.$store.dispatch('modal/setModalSuccess')
      this.$store.dispatch('modal/showModal')
    },
    showModalError() {
      this.$store.dispatch('modal/setMessage', 'Gagal mendaftar sebagai alumni')
      this.$store.dispatch('modal/setModalError')
      this.$store.dispatch('modal/showModal')
    },
    submit() {
      const data = {
        email: this.register.email,
        password: this.register.password,
        fullname: this.datadiri.fullname,
        birthplace: this.datadiri.birthplace,
        birthdate: this.datadiri.birthdate,
        gender: this.datadiri.gender,
        phone: this.datadiri.phone,
        address: this.datadiri.address,
        parent_name: this.datadiri.parentName,
        parent_phone: this.datadiri.parentPhone,
        year_entry_tk: this.dataalumni.year_entry_tk,
        year_entry_sd: this.dataalumni.year_entry_sd,
        year_entry_smp: this.dataalumni.year_entry_smp,
        year_entry_sma: this.dataalumni.year_entry_sma,
        activity: this.dataalumni.activity,
      }
      this.$store.dispatch('modal/showModalLoading')
      this.$axios
        .$post('users', data)
        .then(() => {
          this.showModalSuccess()
          this.$store.dispatch('register/resetForm')
          this.$store.dispatch('datadiri/resetForm')
          this.$store.dispatch('dataalumni/resetForm')
          this.$store.dispatch('register/setCurrentPage', 'email')
        })
        .catch(() => {
          this.showModalError()
          this.confirmed = false;
        })
        .finally(() => {
          console.log('done')
          this.$store.dispatch('modal/hideModalLoading')
        })
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
  margin-top: 2.5em;

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
