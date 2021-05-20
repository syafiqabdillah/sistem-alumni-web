<template>
  <div class="pagination">
    <div @click="goToPage(1)" class="double-prev" v-if="prev">&lt;&lt;</div>
    <div @click="goToPage(prev)" class="prev" v-if="prev">&lt;</div>
    <div @click="goToPage(prev)" class="number prev" v-if="prev">
      {{ prev }}
    </div>
    <div class="number active">{{ currentPage }}</div>
    <div @click="goToPage(next)" class="number next" v-if="next">
      {{ next }}
    </div>
    <div @click="goToPage(next)" class="next" v-if="next">&gt;</div>
    <div @click="goToPage(totalPage)" class="double-next" v-if="next">
      &gt;&gt;
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: Number,
    totalPage: Number,
    goToPage: Function,
  },
  computed: {
    prev() {
      return this.currentPage > 1 ? this.currentPage - 1 : null
    },
    next() {
      return this.currentPage < this.totalPage ? this.currentPage + 1 : null
    },
  },
}
</script>

<style scoped lang="scss">
.pagination {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  color: grey;

  &:hover {
    cursor: pointer;
  }

  & > * {
    width: 30px;
    text-align: center;
    border: 1px solid lightgrey;
    border-radius: 5px;
  }

  .number {
    &.active {
      color: var(--primary);
      font-weight: 700;
      border-color: var(--primary);
    }
  }
}
</style>
