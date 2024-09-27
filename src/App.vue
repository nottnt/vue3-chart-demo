<template>
  <v-app>
    <v-main>
      <v-container>
        <h1 class="text-center">Vue Charts Demo with Vuetify Theme</h1>
        <v-row>
          <v-col>
            <ChartJsBarPie />
          </v-col>
          <v-col>
            <EChartsBarPie />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import ChartJsBarPie from "./components/ChartJsBarPie.vue";
  import EChartsBarPie from "./components/EChartsBarPie.vue";
</script>

<style>
  /* Optionally adjust Vuetify styles here */
</style>
