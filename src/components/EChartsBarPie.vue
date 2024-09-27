<template>
  <div>
    <h2>Bar Chart (vue-echarts)</h2>
    <v-chart class="chart-container" id="e-chart-bar" :option="barOptions" autoresize />

    <h2>Pie Chart (vue-echarts)</h2>
    <v-chart class="chart-container" id="e-chart-pie" :option="pieOptions" autoresize />

    <h2>Line Chart (vue-echarts)</h2>
    <v-chart class="chart-container" id="e-chart-line" :option="lineOptions" autoresize />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, PieChart, LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from 'echarts/components'
import VChart from 'vue-echarts'

// Register only necessary ECharts components
use([
  CanvasRenderer,
  BarChart,
  PieChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
])

// Get the current Vuetify theme
const theme = useTheme()

// Custom tooltip formatter for ECharts
const formatTooltip = (params) => {
  if (params.seriesType === 'bar') {
    return `Custom Bar Tooltip: ${params.name}: ${params.value}`
  } else if (params.seriesType === 'pie') {
    return `Custom Pie Tooltip: ${params.name}: ${params.value}`
  } else if (params.seriesType === 'line') {
    return `Custom Line Tooltip: ${params.name}: ${params.value}`
  }
  return ''
}

const barOptions = ref({
  title: { text: 'Bar Chart' },
  tooltip: {
    trigger: 'item',
    formatter: formatTooltip,
  },
  xAxis: {
    type: 'category',
    data: ['January', 'February', 'March', 'April'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [40, 60, 80, 100],
      type: 'bar',
      color: theme.current.value.colors.primary,
    },
  ],
})

const pieOptions = ref({
  title: { text: 'Pie Chart' },
  tooltip: {
    trigger: 'item',
    formatter: formatTooltip,
  },
  legend: { top: '5%' },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        {
          value: 1048,
          name: 'Search Engine',
          itemStyle: { color: theme.current.value.colors.success },
        },
        {
          value: 735,
          name: 'Direct',
          itemStyle: { color: theme.current.value.colors.secondary },
        },
        {
          value: 580,
          name: 'Email',
          itemStyle: { color: theme.current.value.colors.error },
        },
        {
          value: 484,
          name: 'Union Ads',
          itemStyle: { color: theme.current.value.colors.warning },
        },
        {
          value: 300,
          name: 'Video Ads',
          itemStyle: { color: theme.current.value.colors.blue },
        },
      ],
    },
  ],
})

// Line Chart Options
const lineOptions = ref({
  title: { text: 'Line Chart' },
  tooltip: {
    trigger: 'item',
    formatter: formatTooltip,
  },
  xAxis: {
    type: 'category',
    data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [15, 20, 18, 25, 22],
      type: 'line',
      color: theme.current.value.colors.blue,
    },
  ],
})
</script>

<style></style>
