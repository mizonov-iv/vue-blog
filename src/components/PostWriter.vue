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
    Create Post
  </button>


</template>

<script setup lang="ts">
import {TimeLinePost} from "../posts";
import {ref, onMounted} from "vue";
import {usePosts} from "../stores/posts";
import {useRouter} from "vue-router";

const props = defineProps<{
  post: TimeLinePost
}>()

const title = ref(props.post.title);
const content = ref(props.post.markdown)
const contentEditable = ref<HTMLDivElement>();
const postsStore = usePosts();
const router = useRouter();

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
  const newPost: TimeLinePost = {
    ...props.post,
    title: title.value,
    markdown: content.value,
  };
  postsStore.createNewPost(newPost);
  router.push('/');
}

</script>

<style scoped>

</style>