<template></template>

<script>
export default {
  middleware: [
    function ({ redirect }) {
      redirect('/home')
    },
  ],
}
</script>

<style></style>
