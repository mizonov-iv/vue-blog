<template>
  <div class="panel-block is-flex is-flex-direction-column is-align-items-flex-start"
  >
    <a>{{post.title}}</a>
    <p>{{post.created.toFormat("d MMM")}}</p>
  </div>
</template>

<script setup lang="ts">
import {TimeLinePost} from "../posts";

defineProps<{
  post: TimeLinePost
}>()
</script>