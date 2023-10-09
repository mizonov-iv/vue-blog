<template>
  <h1>Home Page</h1>
  <Suspense>
    <template #default>
      <TimeLine/>
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import TimeLine from "../components/TimeLime.vue";
</script>