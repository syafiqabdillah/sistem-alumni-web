<template>
  <div>
    <label class="asy" :for="name">{{ label }}</label>
    <select class="asy" :name="name" :id="name" :value="value" @input="onChange">
      <option class="asy" :value="null" :selected="!value"></option>
      <option
        class="asy"
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
