<template>
  <RouterLink
      v-if="canEdit"
      :to="`/posts/${post.id}/edit`"
  >
    Edit Post
  </RouterLink>
  <div>
    <h2>{{ post.title }}</h2>
    <div>{{ post.markdown }}</div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import {usePosts} from "../stores/posts";
import {useUsers} from "../stores/users";
import {computed} from "vue";

const router = useRoute();
const postStore = usePosts();
const usersStore = useUsers();

const id = router.params.id as string;
const post = postStore.all.get(id);

if(!post) {
  throw Error(`Post with id ${id} was not found.`)
}
const canEdit = computed(() => {
  if(!usersStore.currentUserId) {
    return false
  }

  if(usersStore.currentUserId !== post.authorId) {
    return false
  }

  return true
})
</script>