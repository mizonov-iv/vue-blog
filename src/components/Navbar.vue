<template>
  <nav class="navbar">
    <a
        class="navbar-item"
        :class="{'navbar-item-active' : period === selectedPeriod}"
        v-for="period in periods"
        :key="period"
        @click.prevent="selectPeriod(period)"
    >
      {{ period }}
    </a>
  </nav>
  <p>{{ selectedPeriod }}</p>
</template>

<script setup lang="ts">
import {ref} from "vue";

const periods = ["Сегодня", "За неделю", "За месяц"];

const selectedPeriod = ref("Сегодня");

const selectPeriod = (period: string) => {
  selectedPeriod.value = period;
};
</script>