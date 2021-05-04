<template>
  <div>
    <label for="fullname">{{ label }} <span v-if="required">*</span></label>
    <input
      v-if="type !== 'textarea'"
      :id="id"
      :name="id"
      :type="type"
      :value="value"
      @input="onChange"
      @blur="onBlur"
      :class="{
        valid: valid === true,
        error: valid === false,
      }"
    />
    <textarea
      v-else
      :id="id"
      :name="id"
      :value="value"
      @input="onChange"
      @blur="onBlur"
      :class="{
        valid: valid === true,
        error: valid === false,
      }"
      :rows="rows"
    />
    <small class="text-red" v-if="valid === false">
      {{ errorMessage }}
    </small>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    id: String,
    type: {
      type: String,
      default: 'text',
    },
    valid: {
      type: Boolean,
      default: null,
    },
    value: null,
    onChange: Function,
    onBlur: Function,
    errorMessage: String,
    rows: {
      type: Number,
      default: 4,
    },
    required: {
      type: Boolean,
      default: true,
    },
  },
}
</script>

<style></style>
