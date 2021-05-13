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
  flex-direction: column;
  font-size: 14px;
  margin-bottom: 1em;

  & > * {
    flex: 1;
  }

  .label {
    /* max-width: 150px; */
    color: var(--grey);
    padding-right: 1em;
    font-size: 10px;
  }
  .value {
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .value::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
}
</style>
