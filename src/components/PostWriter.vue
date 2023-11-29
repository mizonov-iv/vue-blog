<template>
  <label for="">Post Title</label>
  <input
      type="text"
      placeholder="type something"
      v-model="title"
  >
  <div class="post-text-wrapper">
    <div class="content" contenteditable ref="contentEditable" @input="handleInput"/>
    <div class="content">{{ content }}</div>
  </div>
  <button @click.prevent="handleClick">
    Save Post
  </button>
</template>

<script setup lang="ts">
import {Post, TimeLinePost} from "../posts";
import {ref, onMounted} from "vue";
import {usePosts} from "../stores/posts";
import {useRouter} from "vue-router";
import {useUsers} from "../stores/users";

const props = defineProps<{
  post: TimeLinePost | Post;
}>();

const emit = defineEmits<{
  (event: "submit", post: Post): void
}>();

const title = ref(props.post.title);
const content = ref(props.post.markdown)
const contentEditable = ref<HTMLDivElement>();
const postsStore = usePosts();
const router = useRouter();
const usersStore = useUsers();

onMounted(() => {
  if(!contentEditable.value) {
    throw Error('Some error')
  }
  contentEditable.value.innerText = content.value
})

function handleInput () {
  if(!contentEditable.value) {
    throw Error('Some error')
  }
  content.value = contentEditable.value?.innerText
}

function handleClick () {
  if(!usersStore.currentUserId) {
    throw Error("User was not found")
  }
  const newPost: Post = {
    ...props.post,
    created: typeof props.post.created === 'string' ? props.post.created : props.post.created.toISO(),
    title: title.value,
    authorId: usersStore.currentUserId,
    markdown: content.value,
  };
  emit("submit", newPost);
}
</script>