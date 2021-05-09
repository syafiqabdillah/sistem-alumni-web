<template>
  <div>
    <label class="asy" for="fullname">{{ label }} <span v-if="required">*</span></label>
    <input
      :ref="id"
      v-if="type !== 'textarea'"
      :id="id"
      :name="id"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      @input="onChange"
      @blur="onBlur"
      :class="{
        valid: valid === true,
        error: valid === false,
        asy: 'asy'
      }"
    />
    <textarea
      v-else
      :id="id"
      :name="id"
      :value="value"
      :placeholder="placeholder"
      @input="onChange"
      @blur="onBlur"
      :class="{
        valid: valid === true,
        error: valid === false,
        asy: 'asy'
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
    onBlur: {
      type: Function,
      default: () => {}
    },
    errorMessage: String,
    rows: {
      type: Number,
      default: 4,
    },
    required: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
}
</script>

<style></style>
