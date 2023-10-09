<script setup lang="ts">
  import TimeLinePost from "./TimeLinePost.vue";

  defineProps<{
    post: TimeLinePost
  }>()
</script>

<template>
  <ul class="posts-list">
    <li class="post-list-item">
      <p>{{post.title}}</p>
      <p>{{post.created.toFormat("d MMM")}}</p>
    </li>
  </ul>
</template>