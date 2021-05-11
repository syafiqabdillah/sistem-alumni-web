<template>
  <div class="actions">
    <div v-if="showBackButton" class="button white back" @click="backFunction">
      <i class="icofont-arrow-left"></i>
      {{ backText }}
    </div>
    <div
      :class="{ 'button green': 'button green', disabled: nextDisabled }"
      @click="next"
    >
      {{ nextText }}
      <i class="icofont-arrow-right" v-if="showNextIcon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigator',
  methods: {
    next() {
      if (!this.nextDisabled) {
        this.nextFunction()
      }
    }
  },
  props: {
    showBackButton: {
      type: Boolean,
      default: true,
    },
    backFunction: Function,
    nextFunction: Function,
    nextDisabled: Boolean,
    backText: {
      type: String,
      default: 'kembali',
    },
    nextText: {
      type: String,
      default: 'Lanjutkan',
    },
    showNextIcon: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style></style>
