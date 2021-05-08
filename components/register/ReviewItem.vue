<template>
  <div class="review-item">
    <div class="label">{{ label }}</div>
    <div class="value">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewItem',
  props: {
    label: String,
    value: null,
  },
}
</script>

<style scoped lang="scss">
.review-item {
  width: 100%;
  display: flex;
  font-size: 14px;
  margin-bottom: 1em;

  & > * {
    flex: 1;
  }

  .label {
    max-width: 150px;
    color: var(--grey);
  }
  .value {
    padding-left: .5em;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
