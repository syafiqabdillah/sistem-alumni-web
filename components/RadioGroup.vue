<template>
  <div>
    <label class="asy">{{ label }}
      <span v-if="required">*</span>
    </label>
    <div class="options">
      <div class="option" v-for="option in options" :key="option.id">
        <input
          class="radio asy"
          type="radio"
          :id="option.id"
          :name="name"
          :value="option.value"
          :checked="option.value == value"
          @input="onChange"
        />
        <label :for="option.id" class="radio asy">{{ option.label }}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: null,
    options: Array,
    name: String,
    onChange: Function,
    required: {
      type: Boolean,
      default: true
    }
  },
}
</script>

<style scoped lang="scss">
.options {
  display: flex;
  gap: .5em;
}
.option {
  display: flex;
  align-items: center;

  input {
    margin-right: 0.5em;
  }

  label {
    font-size: 12px;
  }
}
</style>
