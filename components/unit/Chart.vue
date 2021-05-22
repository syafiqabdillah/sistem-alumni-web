<template>
  <div>
    <div
      :class="{
        'chart-container': 'chart-container',
        card: 'card',
        show: chart.show,
      }"
      v-if="chart.ready"
    >
      <UnitRegisterChart
        :chartdata="chart.data"
        :options="chart.options"
        :styles="chart.styles"
        v-if="chart.show"
      />
    </div>
    <div class="toggle">
      <div @click="toggleShow">
        <span>{{ chart.show ? 'tutup' : 'tampilkan' }} grafik</span>
        <i class="icofont-chart-bar-graph"></i>
      </div>
    </div>
  </div>
</template>

<script>
import UnitRegisterChart from './RegisterChart'
import { mapState } from 'vuex'
export default {
  name: 'Chart',
  components: {
    UnitRegisterChart,
  },
  props: {
    users: Array,
    unit: String,
  },
  data() {
    return {
      chart: {
        ready: false,
        show: false,
        data: {
          labels: [],
          datasets: [
            {
              label: 'Alumni',
              data: [],
              backgroundColor: 'hsl(146, 40%, 40%)',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          position: 'relative',
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        },
        styles: {
          height: '200px',
          position: 'relative',
          margin: '0 auto',
        },
      },
    }
  },
  methods: {
    loadChart() {
      this.chart.ready = false
      var mapper = {}
      this.users.forEach((user) => {
        var angkatan = `year_entry_first_${this.unit}`
        var label = `Angkatan ${user.year_entry - this.alumni[angkatan] + 1} (${
          user.year_entry
        })`
        if (label in mapper) {
          mapper[label] = mapper[label] + 1
        } else {
          mapper[label] = 1
        }
      })
      Object.keys(mapper).forEach((key) => {
        this.chart.data.labels.push(key)
        this.chart.data.datasets[0].data.push(mapper[key])
      })
      this.chart.ready = true
    },
    toggleShow() {
      this.chart.show = !this.chart.show
    },
  },
  mounted() {
    this.loadChart()
  },
  computed: {
    ...mapState({
      alumni: (state) => state.alumni,
    }),
  },
}
</script>

<style scoped lang="scss">
.chart-container {
  width: 100%;
  display: none;
  justify-content: center;
  max-width: none;
  overflow-x: scroll;
  transform: scaleY(0);
  transform-origin: top;
  transition: 200ms all;

  &.show {
    transform: scaleY(1);
    display: flex;
  }
}
.toggle {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 0.5rem 0;
  font-size: 0.8rem;
  color: grey;
  cursor: pointer;
  margin-top: 1em;

  & > * {
    &:hover {
      color: var(--primary);
    }
  }
}
</style>
