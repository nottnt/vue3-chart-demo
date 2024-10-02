<template>
  <div>
    <h2>Bar Chart (vue-echarts)</h2>
    <v-chart class="chart-container" id="e-chart-bar" :option="barOptions" autoresize />
    <v-btn
      color="secondary"
      variant="outlined"
      @click="() => handleClickInteractChart(CHART_TYPE.BAR)"
      >Interact Bar</v-btn
    >

    <h2>Pie Chart (vue-echarts)</h2>
    <v-chart class="chart-container" id="e-chart-pie" :option="pieOptions" autoresize />
    <v-btn
      color="secondary"
      variant="outlined"
      @click="() => handleClickInteractChart(CHART_TYPE.PIE)"
      >Interact Pie</v-btn
    >

    <h2>Line Chart (vue-echarts)</h2>
    <v-chart class="chart-container" id="e-chart-line" :option="lineOptions" autoresize />
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
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart, PieChart, LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from 'echarts/components'
import { EChartsOption } from 'echarts'
import VChart from 'vue-echarts'
import { CallbackDataParams } from 'echarts/types/dist/shared'
import { CHART_TYPE } from '../constant'
import { randomNumber } from '../utils'

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
const formatTooltip = (params: unknown) => {
  const paramsWithType = params as CallbackDataParams
  let result = ''
  if (paramsWithType.seriesType === 'bar') {
    return `Custom Bar Tooltip: ${paramsWithType.name}: ${paramsWithType.value}`
  } else if (paramsWithType.seriesType === 'pie') {
    return `Custom Pie Tooltip: ${paramsWithType.name}: ${paramsWithType.value}`
  } else if (paramsWithType.seriesType === 'line') {
    return `Custom Line Tooltip: ${paramsWithType.name}: ${paramsWithType.value}`
  }

  return ''
}

const barOptions = ref<EChartsOption>({
  title: { text: 'Bar Chart' },
  tooltip: {
    className: 'chart-tooltip',
    backgroundColor: '#424242',
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
      type: CHART_TYPE.BAR,
      color: theme.current.value.colors.primary,
    },
  ],
})

const pieOptions = ref<EChartsOption>({
  title: { text: 'Pie Chart' },
  tooltip: {
    className: 'chart-tooltip',
    backgroundColor: '#424242',
    trigger: 'item',
    formatter: formatTooltip,
  },
  legend: { top: '5%' },
  series: [
    {
      name: 'Access From',
      type: CHART_TYPE.PIE,
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
const lineOptions = ref<EChartsOption>({
  title: { text: 'Line Chart' },
  tooltip: {
    className: 'chart-tooltip',
    backgroundColor: '#424242',
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
      type: CHART_TYPE.LINE,
      color: theme.current.value.colors.blue,
    },
  ],
})

const handleClickInteractChart = (type: CHART_TYPE) => {
  if (type === CHART_TYPE.BAR) {
    barOptions.value.series = [
      {
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        type: CHART_TYPE.BAR,
        color: theme.current.value.colors.primary,
      },
    ]
  } else if (type === CHART_TYPE.PIE) {
    pieOptions.value.series = [
      {
        name: 'Access From',
        type: CHART_TYPE.PIE,
        radius: '50%',
        data: [
          {
            value: randomNumber(),
            name: 'Search Engine',
            itemStyle: { color: theme.current.value.colors.success },
          },
          {
            value: randomNumber(),
            name: 'Direct',
            itemStyle: { color: theme.current.value.colors.secondary },
          },
          {
            value: randomNumber(),
            name: 'Email',
            itemStyle: { color: theme.current.value.colors.error },
          },
          {
            value: randomNumber(),
            name: 'Union Ads',
            itemStyle: { color: theme.current.value.colors.warning },
          },
          {
            value: randomNumber(),
            name: 'Video Ads',
            itemStyle: { color: theme.current.value.colors.blue },
          },
        ],
      },
    ]
  } else {
    lineOptions.value.series = [
      {
        data: [randomNumber(), randomNumber(), randomNumber(), randomNumber(), randomNumber()],
        type: CHART_TYPE.LINE,
        color: theme.current.value.colors.blue,
      },
    ]
  }
}
</script>

<style></style>
