<template>
  <div class="spacer" :style="`height: calc(1em * ${height})`"></div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 2
    }
  }
}
</script>

<style scoped>
.spacer {
  background-color: inherit;
  width: 100%;
}
</style>