<template>
  <label for="">Post Title</label>
  <input
      type="text"
      placeholder="type something"
      v-model="title"
  >
  {{title}}
</template>

<script setup lang="ts">
  import TimeLinePost from "./TimeLinePost.vue";
  import {ref} from "vue";

  const props = defineProps<{
    post: TimeLinePost
  }>()

  const title = ref(props.post.title)

</script>

<style scoped>

</style>