<template>
  <div class="pagination-container">
    <div class="pagination">
      <div @click="goToPage(1)" class="double-prev" v-if="prev">&lt;&lt;</div>
      <div @click="goToPage(prev)" class="prev" v-if="prev">&lt;</div>
      <div @click="goToPage(prev)" class="number prev" v-if="prev">
        {{ prev }}
      </div>
      <div class="number active">{{ pagination.currentPage }}</div>
      <div @click="goToPage(next)" class="number next" v-if="next">
        {{ next }}
      </div>
      <div @click="goToPage(next)" class="next" v-if="next">&gt;</div>
      <div @click="goToPage(totalPage)" class="double-next" v-if="next">
        &gt;&gt;
      </div>
    </div>
    <div class="description">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    goToPage: Function,
    pagination: Object,
  },
  computed: {
    prev() {
      return this.pagination.currentPage > 1
        ? this.pagination.currentPage - 1
        : null
    },
    next() {
      return this.pagination.currentPage < this.pagination.totalPage
        ? this.pagination.currentPage + 1
        : null
    },
    description() {
      const firstData =
        (this.pagination.currentPage - 1) * this.pagination.perPage + 1
      const lastData =
        this.pagination.currentPage === this.pagination.totalPage
          ? this.pagination.totalData
          : firstData + this.pagination.perPage - 1
      return `${firstData} - ${lastData} dari ${this.pagination.totalData}`
    },
  },
}
</script>

<style scoped lang="scss">
.description {
  text-align: center;
  width: 100%;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: grey;
}
.pagination {
  margin-top: 1.5rem;
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
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid lightgrey;
    border-radius: 50%;

    &:hover {
      border-color: var(--primary);
    }
  }

  .number {
    &.active {
      color: var(--primary);
      border-color: var(--primary);
    }
  }
}
</style>
