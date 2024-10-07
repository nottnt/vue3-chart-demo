<template>
  <h2>Bar Chart (Vue data UI)</h2>
  <div style="width: 50%; height: 33vh">
    <VueUiXy :config="uiXyConfig" :dataset="datasetBar" />
  </div>
  <v-btn
    color="secondary"
    variant="outlined"
    @click="() => handleClickInteractChart(CHART_TYPE.BAR)"
    >Interact Bar</v-btn
  >

  <h2>Pie Chart(Vue data UI)</h2>
  <div style="width: 50%; height: 33vh">
    <VueUiDonut :config="donutConfig" :dataset="datasetPie" />
  </div>
  <v-btn
    color="secondary"
    variant="outlined"
    @click="() => handleClickInteractChart(CHART_TYPE.PIE)"
    >Interact Pie</v-btn
  >

  <h2>Line Chart(Vue data UI)</h2>
  <div style="width: 50%; height: 33vh">
    <VueUiXy :config="uiXyConfig" :dataset="datasetLine" />
  </div>
  <v-btn
    color="secondary"
    variant="outlined"
    @click="() => handleClickInteractChart(CHART_TYPE.LINE)"
    >Interact Line</v-btn
  >
</template>

<script setup lang="ts">
import { CHART_TYPE } from '../constant'
import { randomNumber } from '../utils'
import { ref } from 'vue'
import {
  VueUiXy,
  VueUiDonut,
  type VueUiXyConfig,
  type VueUiXyDatasetItem,
  type VueUiDonutConfig,
  type VueUiDonutDatasetItem,
} from 'vue-data-ui'

import { useTheme } from 'vuetify'
import 'vue-data-ui/style.css'

const theme = useTheme()

const uiXyConfig = ref<VueUiXyConfig>({
  theme: '',
  responsive: true,
  customPalette: [],
  useCssAnimation: true,
  chart: {
    fontFamily: 'inherit',
    backgroundColor: '#FFFFFF',
    color: '#1A1A1A',
    height: 600,
    width: 1000,
    zoom: {
      show: false,
      color: '#CCCCCC',
      highlightColor: '#4A4A4A',
      fontSize: 14,
      useResetSlot: false,
    },
    padding: {
      top: 36,
      right: 24,
      bottom: 48,
      left: 48,
    },
    highlighter: {
      color: '#1A1A1A',
      opacity: 0,
      useLine: false,
      lineDasharray: 2,
      lineWidth: 1,
    },
    highlightArea: {
      show: false,
      from: 0,
      to: 0,
      color: '#1A1A1A',
      opacity: 0,
      caption: {
        text: 'Caption',
        fontSize: 20,
        color: '#1A1A1A',
        bold: false,
        offsetY: 0,
        width: 'auto',
        textAlign: 'center',
      },
    },
    timeTag: {
      show: false,
      backgroundColor: '#e1e5e8',
      color: '#1A1A1A',
      fontSize: 12,
      circleMarker: {
        radius: 3,
        color: '#1A1A1A',
      },
    },
    grid: {
      stroke: '#e1e5e8',
      showVerticalLines: false,
      showHorizontalLines: false,
      labels: {
        show: true,
        color: '#1A1A1A',
        fontSize: 12,
        axis: {
          yLabel: '',
          yLabelOffsetX: 0,
          xLabel: '',
          xLabelOffsetY: 14,
          fontSize: 12,
        },
        zeroLine: {
          show: true,
        },
        xAxis: {
          showBaseline: true,
        },
        yAxis: {
          showBaseline: true,
          commonScaleSteps: 10,
          useIndividualScale: false,
          stacked: false,
          gap: 12,
          labelWidth: 40,
        },
        xAxisLabels: {
          color: '#1A1A1A',
          show: true,
          values: [],
          fontSize: 18,
          showOnlyFirstAndLast: false,
          showOnlyAtModulo: false,
          modulo: 12,
          yOffset: 8,
          rotation: 0,
        },
      },
    },
    comments: {
      show: true,
      showInTooltip: true,
      width: 200,
      offsetX: 0,
      offsetY: 0,
    },
    labels: {
      fontSize: 10,
      prefix: '',
      suffix: '',
    },
    legend: {
      color: '#1A1A1A',
      show: true,
      fontSize: 16,
    },
    title: {
      text: 'Title',
      color: '#1A1A1A',
      fontSize: 20,
      bold: true,
      subtitle: {
        color: '#CCCCCC',
        text: '',
        fontSize: 16,
      },
      show: true,
      offsetX: 0,
      offsetY: 0,
    },
    tooltip: {
      show: true,
      customFormat: (params) => {
        return ''
      },
    },
    userOptions: {
      show: false,
      buttons: {
        tooltip: true,
        pdf: true,
        csv: true,
        img: true,
        table: true,
        labels: true,
        fullscreen: true,
        sort: false,
        stack: true,
      },
      buttonTitles: {
        open: 'Open options',
        close: 'Close options',
        tooltip: 'Toggle tooltip',
        pdf: 'Download PDF',
        csv: 'Download CSV',
        img: 'Download PNG',
        table: 'Toggle table',
        labels: 'Toggle labels',
        fullscreen: 'Toggle fullscreen',
        stack: 'Toggle stack mode',
      },
    },
  },
  bar: {
    borderRadius: 2,
    useGradient: false,
    periodGap: 0.1,
    border: {
      useSerieColor: false,
      strokeWidth: 1,
      stroke: '#FFFFFF',
    },
    labels: {
      show: true,
      offsetY: -8,
      rounding: 0,
      color: '#1A1A1A',
    },
    serieName: {
      show: false,
      useAbbreviation: true,
      abbreviationSize: 3,
      useSerieColor: true,
      color: '#1A1A1A',
      bold: false,
    },
  },
  line: {
    radius: 6,
    useGradient: true,
    strokeWidth: 2,
    labels: {
      show: true,
      offsetY: -8,
      rounding: 0,
      color: '#1A1A1A',
    },
    area: {
      useGradient: true,
      opacity: 0,
    },
  },
  plot: {
    radius: 6,
    useGradient: true,
    labels: {
      show: true,
      offsetY: -8,
      rounding: 0,
      color: '#1A1A1A',
    },
  },
  table: {
    responsiveBreakpoint: 400,
    rounding: 0,
    sparkline: true,
    columnNames: {
      period: 'Period',
      total: 'Total',
    },
    th: {
      backgroundColor: '#FAFAFA',
      color: '#1A1A1A',
      outline: '',
    },
    td: {
      backgroundColor: '#FAFAFA',
      color: '#1A1A1A',
      outline: '',
    },
  },
  showTable: false,
})

const donutConfig = ref<VueUiDonutConfig>({
  responsive: true,
  theme: '',
  customPalette: [],
  useCssAnimation: true,
  useBlurOnHover: true,
  userOptions: {
    show: false,
    buttons: {
      tooltip: true,
      pdf: true,
      csv: true,
      img: true,
      table: true,
      labels: true,
      fullscreen: true,
      sort: false,
      stack: false,
    },
    buttonTitles: {
      open: 'Open options',
      close: 'Close options',
      tooltip: 'Toggle tooltip',
      pdf: 'Download PDF',
      csv: 'Download CSV',
      img: 'Download PNG',
      table: 'Toggle table',
      labels: 'Toggle labels',
      fullscreen: 'Toggle fullscreen',
    },
  },
  translations: {
    total: 'Total',
    average: 'Average',
  },
  table: {
    show: false,
    responsiveBreakpoint: 400,
    th: {
      backgroundColor: '#FFFFFF',
      color: '#1A1A1A',
      outline: 'none',
    },
    td: {
      backgroundColor: '#FFFFFF',
      color: '#1A1A1A',
      outline: 'none',
      roundingValue: 0,
      roundingPercentage: 0,
    },
    columnNames: {
      series: 'Series',
      value: 'Value',
      percentage: 'Percentage',
    },
  },
  style: {
    fontFamily: 'inherit',
    chart: {
      useGradient: true,
      gradientIntensity: 0,
      backgroundColor: '#FFFFFF',
      color: '#1A1A1A',
      layout: {
        labels: {
          dataLabels: {
            show: false,
            useLabelSlots: false,
            hideUnderValue: 3,
            prefix: '',
            suffix: '',
          },
          value: {
            rounding: 0,
            show: true,
          },
          percentage: {
            color: '#1A1A1A',
            bold: true,
            fontSize: 18,
          },
          name: {
            color: '#1A1A1A',
            bold: false,
            fontSize: 14,
          },
          hollow: {
            show: false,
            total: {
              show: false,
              bold: false,
              fontSize: 18,
              color: '#AAAAAA',
              text: 'Total',
              offsetY: 0,
              value: {
                color: '#1A1A1A',
                fontSize: 18,
                bold: false,
                suffix: '',
                prefix: '',
                offsetY: 0,
                rounding: 0,
              },
            },
            average: {
              show: false,
              bold: false,
              fontSize: 18,
              color: '#AAAAAA',
              text: 'Average',
              offsetY: 0,
              value: {
                color: '#1A1A1A',
                fontSize: 18,
                bold: true,
                suffix: '',
                prefix: '',
                offsetY: 0,
                rounding: 0,
              },
            },
          },
        },
        donut: {
          strokeWidth: 64,
          borderWidth: 1,
          useShadow: false,
          shadowColor: '#1A1A1A',
        },
      },
      comments: {
        show: true,
        showInTooltip: true,
        width: 100,
        offsetY: 0,
        offsetX: 0,
      },
      legend: {
        show: true,
        bold: false,
        backgroundColor: '#FFFFFF',
        color: '#1A1A1A',
        fontSize: 16,
        roundingValue: 0,
        roundingPercentage: 0,
      },
      tooltip: {
        show: true,
        color: '#1A1A1A',
        backgroundColor: '#FFFFFF',
        fontSize: 14,
        borderRadius: 4,
        borderColor: '#e1e5e8',
        borderWidth: 1,
        backgroundOpacity: 100,
        showValue: true,
        showPercentage: true,
        roundingValue: 0,
        roundingPercentage: 0,
      },
      title: {
        text: 'Title',
        color: '#1A1A1A',
        fontSize: 20,
        bold: true,
        subtitle: {
          color: '#A1A1A1',
          text: '',
          fontSize: 16,
          bold: false,
        },
      },
    },
  },
})

const datasetBar = ref<VueUiXyDatasetItem[]>([
  {
    name: 'Bar',
    series: [1, 10, 20, 30, 25, 20, 12, 16, 19, 21],
    color: theme.current.value.colors.primary,
    type: CHART_TYPE.BAR,
    useArea: false,
    useProgression: false,
    dataLabels: true,
    dashed: false,
  },
])

const datasetLine = ref<VueUiXyDatasetItem[]>([
  {
    name: 'Line',
    series: [1, 10, 20, 30, 25, 20, 12, 16, 19, 21],
    color: theme.current.value.colors.blue,
    type: CHART_TYPE.LINE,
    useArea: false,
    useProgression: false,
    dataLabels: true,
    dashed: false,
  },
])

const generatePieData = () => {
  const isPush = !!randomNumber(2)
  const colorPalettes = Object.values(theme.current.value.colors)

  if (isPush) {
    datasetPie.value.push({
      name: `series ${datasetPie.value.length}`,
      values: [randomNumber()],
      color: colorPalettes[randomNumber(colorPalettes.length)],
    })
  } else if (datasetPie.value.length > 1) {
    datasetPie.value.shift()
  }
}

const datasetPie = ref<VueUiDonutDatasetItem[]>([
  {
    name: 'series 1',
    values: [30, 20],
    color: theme.current.value.colors.primary,
  },
  {
    name: 'series 2',
    values: [70],
    color: theme.current.value.colors.error,
  },
])

const handleClickInteractChart = (type: CHART_TYPE) => {
  if (type === CHART_TYPE.BAR) {
    datasetBar.value[0].series = [
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
    ]
  } else if (type === CHART_TYPE.PIE) {
    generatePieData()
  } else {
    datasetLine.value[0].series = [
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
    ]
  }
}
</script>
