<template>
  <div>
    <h2>Bar Chart (vue-echarts)</h2>
    <v-chart class="chart" id="e-chart-bar" :option="barOptions" autoresize />

    <h2>Pie Chart (vue-echarts)</h2>
    <v-chart class="chart" id="e-chart-pie" :option="pieOptions" autoresize />
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useTheme } from "vuetify";
  import { use } from "echarts/core";
  import { CanvasRenderer } from "echarts/renderers";
  import { BarChart, PieChart } from "echarts/charts";
  import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent,
  } from "echarts/components";
  import VChart from "vue-echarts";

  // Register only necessary ECharts components
  use([
    CanvasRenderer,
    BarChart,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    GridComponent,
  ]);

  // Get the current Vuetify theme
  const theme = useTheme();

  const barOptions = ref({
    title: { text: "Bar Chart" },
    tooltip: {},
    xAxis: {
      type: "category",
      data: ["January", "February", "March", "April"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [40, 60, 80, 100],
        type: "bar",
        color: theme.current.value.colors.primary,
      },
    ],
  });

  const pieOptions = ref({
    title: { text: "Pie Chart" },
    tooltip: { trigger: "item" },
    legend: { top: "5%" },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: "50%",
        data: [
          {
            value: 1048,
            name: "Search Engine",
            itemStyle: { color: theme.current.value.colors.success },
          },
          {
            value: 735,
            name: "Direct",
            itemStyle: { color: theme.current.value.colors.secondary },
          },
          {
            value: 580,
            name: "Email",
            itemStyle: { color: theme.current.value.colors.error },
          },
          {
            value: 484,
            name: "Union Ads",
            itemStyle: { color: theme.current.value.colors.warning },
          },
          {
            value: 300,
            name: "Video Ads",
            itemStyle: { color: theme.current.value.colors.blue },
          },
        ],
      },
    ],
  });
</script>

<style>
  .chart {
    height: 50vh;
  }
</style>
