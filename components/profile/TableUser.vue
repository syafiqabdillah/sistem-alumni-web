<template>
  <div class="table-user">
    <vue-good-table
      :columns="columns"
      @on-selected-rows-change="selectionChanged"
      :rows="rows"
      :select-options="{
        enabled: true,
      }"
      :search-options="{ enabled: true }"
    >
      <div slot="selected-row-actions">
        <button>Action 1</button>
      </div>
    </vue-good-table>
  </div>
</template>

<script scoped>
export default {
  name: 'TableUser',
  data() {
    return {
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        {
          id: 2,
          name: 'Jane',
          age: 24,
          createdAt: '2011-10-31',
          score: 0.03343,
        },
        {
          id: 3,
          name: 'Susan',
          age: 16,
          createdAt: '2011-10-30',
          score: 0.03343,
        },
        {
          id: 4,
          name: 'Chris',
          age: 55,
          createdAt: '2011-10-11',
          score: 0.03343,
        },
        {
          id: 5,
          name: 'Dan',
          age: 40,
          createdAt: '2011-10-21',
          score: 0.03343,
        },
        {
          id: 6,
          name: 'John',
          age: 20,
          createdAt: '2011-10-31',
          score: 0.03343,
        },
      ],
    }
  },
  methods: {
    selectionChanged() {
      console.log('eyo')
    },
  },
}
</script>

<style scoped lang="scss">

</style>
