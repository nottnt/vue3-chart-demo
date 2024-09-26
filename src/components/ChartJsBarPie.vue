<template>
  <div>
    <h2>Bar Chart (vue-chartjs)</h2>
    <Bar id="chart-js-bar" :data="barData" :options="chartOptions" />

    <h2>Pie Chart (vue-chartjs)</h2>
    <Pie id="chart-js-pie" :data="pieData" :options="chartOptions" />
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import { useTheme } from "vuetify";
  import { Bar, Pie } from "vue-chartjs"; // Import Bar and Pie charts
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale,
  } from "chart.js";

  // Register necessary components for Chart.js
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    ArcElement,
    CategoryScale,
    LinearScale
  );

  // Get the current Vuetify theme
  const theme = useTheme();

  const barData = ref({
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: "Sales",
        backgroundColor: [
          theme.current.value.colors.primary,
          theme.current.value.colors.secondary,
          theme.current.value.colors.success,
          theme.current.value.colors.error,
        ],
        data: [40, 60, 80, 100],
      },
    ],
  });

  const pieData = ref({
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Population",
        backgroundColor: [
          theme.current.value.colors.error,
          theme.current.value.colors.blue,
          theme.current.value.colors.warning,
        ],
        data: [300, 500, 200],
      },
    ],
  });

  const chartOptions = ref({
    responsive: true,
    maintainAspectRatio: true,
  });
</script>

<style>
  /* You can adjust chart container size here if needed */
</style>
