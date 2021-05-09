<template>
  <div class="modal-detail-user">
    eyo
  </div>
</template>

<script>
export default {
  name: 'ModalDetailUser',
  props: {
    user: Object,
    show: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style scoped lang="scss">
.modal-detail-user {
  position: absolute;
  height: 100%;
  width: 100%;
  background: grey;
}
</style>
