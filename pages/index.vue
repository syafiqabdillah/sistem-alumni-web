<template></template>

<script>
export default {
  middleware: [
    function ({ redirect }) {
      redirect('/home')
    },
  ],
  head() {
    return {
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'Sistem Alumni Yayasan Asy Syaamil Bontang',
        },
      ],
    }
  },
}
</script>

<style></style>
