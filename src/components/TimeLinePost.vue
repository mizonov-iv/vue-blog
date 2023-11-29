<script setup lang="ts">
import {TimeLinePost} from "../posts";

  defineProps<{
    post: TimeLinePost
  }>()



</script>

<template>
  <ul class="posts-list">
    <li class="post-list-item">
      <RouterLink :to="`/posts/${post.id}`">
        <p>{{post.title}}</p>
      </RouterLink>
      <p>{{post.created.toFormat("d MMM")}}</p>
    </li>
  </ul>
</template>