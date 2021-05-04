<template>
  <div>
    <label :for="name">{{ label }}</label>
    <select :name="name" :id="name" :value="value" @input="onChange">
      <option :value="null" :selected="!value"></option>
      <option
        v-for="item in options"
        :key="item.value"
        :value="item.value"
        :selected="item.value == value"
      >
        {{ item.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectField',
  props: {
    label: String,
    name: String,
    value: null,
    onChange: Function,
    options: Array,
  },
}
</script>

<style></style>
