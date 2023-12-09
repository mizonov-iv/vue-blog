<template>
  <h2>New Post</h2>
  <PostWriter :post="post" @submit="handleSubmit" />
</template>

<script setup lang="ts">
  import PostWriter from "../components/PostWriter.vue";
  import {DateTime} from "luxon";
  import {Post, TimeLinePost} from "../posts";
  import {useUsers} from "../stores/users";
  import {usePosts} from "../stores/posts";
  import {useRouter} from "vue-router";

  const usersStore = useUsers();
  const postsStore = usePosts();
  const router = useRouter();

  if(!usersStore.currentUserId) {
    throw Error("User was not found");
  }

  const post: TimeLinePost = {
    id: "-1",
    authorId: usersStore.currentUserId,
    title: "Title",
    created: DateTime.now(),
    markdown: "##Post text",
  }

  async function handleSubmit(post: Post) {
    await postsStore.createNewPost(post);
    router.push('/');
  }
</script>

