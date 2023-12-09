<template>
  <nav class="navigation">
    <a
       class="navigation-item"
       v-for="period in periods"
       :key="period"
       @click.prevent="postsStore.setSelectedPeriod(period)"
    >
      {{period}}
    </a>
  </nav>
  <TimeLinePost
      v-for="post in postsStore.filteredPosts"
      :key="post.id"
      :post="post"
  />
</template>

<script setup lang="ts">
import {periods} from "../constans";
import { usePosts } from "../stores/posts";
import TimeLinePost from "./TimeLinePost.vue";

const postsStore = usePosts();

await postsStore.getPosts();
</script>
