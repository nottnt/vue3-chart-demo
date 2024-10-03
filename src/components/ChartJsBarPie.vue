<template>
  <div>
    <h2>Bar Chart (vue-chartjs)</h2>
    <div class="chart-container">
      <Bar id="chart-js-bar" :data="barData" :options="barChartOptions" />
    </div>
    <v-btn
      color="secondary"
      variant="outlined"
      @click="() => handleClickInteractChart(CHART_TYPE.BAR)"
      >Interact Bar</v-btn
    >

    <h2>Pie Chart (vue-chartjs)</h2>
    <div class="chart-container">
      <Pie id="chart-js-pie" :data="pieData" :options="pieChartOptions" />
    </div>
    <v-btn
      color="secondary"
      variant="outlined"
      @click="() => handleClickInteractChart(CHART_TYPE.PIE)"
      >Interact Pie</v-btn
    >

    <h2>Line Chart (vue-chartjs)</h2>
    <div class="chart-container">
      <Line id="chart-js-line" :data="lineData" :options="lineChartOptions" />
    </div>
    <v-btn
      color="secondary"
      variant="outlined"
      @click="() => handleClickInteractChart(CHART_TYPE.LINE)"
      >Interact Line</v-btn
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import { Bar, Pie, Line } from 'vue-chartjs' // Import Bar and Pie charts
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ChartData,
  ChartOptions,
  TooltipItem,
  ChartTypeRegistry,
} from 'chart.js'
import { CHART_TYPE } from '../constant'
import { randomNumber } from '../utils'

// Register components needed for Line chart
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement
)

// Get the current Vuetify theme
const theme = useTheme()

const barData = ref<ChartData<CHART_TYPE.BAR>>({
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      label: 'Sales',
      backgroundColor: [
        theme.current.value.colors.primary,
        theme.current.value.colors.secondary,
        theme.current.value.colors.success,
        theme.current.value.colors.error,
      ],
      data: [40, 60, 80, 100],
    },
  ],
})

const pieData = ref<ChartData<CHART_TYPE.PIE>>({
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: 'Population',
      backgroundColor: [
        theme.current.value.colors.error,
        theme.current.value.colors.blue,
        theme.current.value.colors.warning,
      ],
      data: [300, 500, 200],
    },
  ],
})

// Line Chart Data
const lineData = ref<ChartData<CHART_TYPE.LINE>>({
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      label: 'Temperature',
      borderColor: theme.current.value.colors.blue,
      backgroundColor: theme.current.value.colors.blue,
      data: [15, 20, 18, 25],
      fill: false,
      tension: 0.1,
    },
  ],
})

const barChartOptions = ref<ChartOptions<CHART_TYPE.BAR>>({
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: function (tooltipItem: TooltipItem<keyof ChartTypeRegistry>) {
          return `Custom Tooltip: ${tooltipItem.dataset.label} - ${tooltipItem.raw} units`
        },
      },
    },
  },
})

const pieChartOptions = ref<ChartOptions<CHART_TYPE.PIE>>({
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: function (tooltipItem: TooltipItem<keyof ChartTypeRegistry>) {
          return `Custom Tooltip: ${tooltipItem.dataset.label} - ${tooltipItem.raw} units`
        },
      },
    },
  },
})

const lineChartOptions = ref<ChartOptions<CHART_TYPE.LINE>>({
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    tooltip: {
      backgroundColor: '#424242',
      callbacks: {
        label: function (tooltipItem: TooltipItem<keyof ChartTypeRegistry>) {
          return `Custom Tooltip: ${tooltipItem.dataset.label} - ${tooltipItem.raw} units`
        },
      },
    },
  },
})

const handleClickInteractChart = (type: CHART_TYPE) => {
  if (type === CHART_TYPE.BAR) {
    barData.value = {
      ...barData.value,
      datasets: [
        {
          label: 'Sales',
          backgroundColor: [
            theme.current.value.colors.primary,
            theme.current.value.colors.secondary,
            theme.current.value.colors.success,
            theme.current.value.colors.error,
          ],
          data: [randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        },
      ],
    }
  } else if (type === CHART_TYPE.PIE) {
    pieData.value = {
      ...pieData.value,
      datasets: [
        {
          label: 'Population',
          backgroundColor: [
            theme.current.value.colors.error,
            theme.current.value.colors.blue,
            theme.current.value.colors.warning,
          ],
          data: [randomNumber(), randomNumber(), randomNumber()],
        },
      ],
    }
  } else {
    lineData.value = {
      ...lineData.value,
      datasets: [
        {
          label: 'Temperature',
          borderColor: theme.current.value.colors.blue,
          backgroundColor: theme.current.value.colors.blue,
          data: [randomNumber(), randomNumber(), randomNumber(), randomNumber()],
          fill: false,
          tension: 0.1,
        },
      ],
    }
  }
}
</script>

<style></style>
