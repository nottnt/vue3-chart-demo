<template>
  <div>
    <h2>Bar Chart (vue-chartjs)</h2>
    <div class="chart-container">
      <Bar id="chart-js-bar" :data="barData" :options="chartOptions" />
    </div>

    <h2>Pie Chart (vue-chartjs)</h2>
    <div class="chart-container">
      <Pie id="chart-js-pie" :data="pieData" :options="chartOptions" />
    </div>

    <h2>Line Chart (vue-chartjs)</h2>
    <div class="chart-container">
      <Line id="chart-js-line" :data="lineData" :options="chartOptions" />
    </div>
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
} from 'chart.js'

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

const barData = ref({
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

const pieData = ref({
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
const lineData = ref({
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

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `Custom Tooltip: ${tooltipItem.dataset.label} - ${tooltipItem.raw} units`
        },
      },
    },
  },
})
</script>

<style></style>
