<script setup lang="ts">
import {TimeLinePost} from "../posts";

  defineProps<{
    post: TimeLinePost
  }>()

</script>

<template>
  <ul class="posts-list">
    <li class="post-list-item">
      <RouterLink class="item-link" :to="`/posts/${post.id}`">
        <p>{{post.title}}</p>
      </RouterLink>
      <p>{{post.created.toFormat("d MMMM")}}</p>
    </li>
  </ul>
</template>