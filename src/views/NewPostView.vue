<template>
  <h1>New Post</h1>
  <PostWriter :post="post"/>
</template>

<script setup lang="ts">
  import PostWriter from "../components/PostWriter.vue";
  import {DateTime} from "luxon";
  import {TimeLinePost} from "../posts";

  const post: TimeLinePost = {
    id: "-1",
    title: "Title",
    created: DateTime.now(),
    markdown: "##Title",
  }
</script>

