<template>
  <nav class="navbar">
    <a
        class="navbar-item"
        href=""
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

let selectedPeriod = ref("Сегодня");

function selectPeriod (period: string) {
  selectedPeriod.value = period

}

</script>