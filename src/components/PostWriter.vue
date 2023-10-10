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


</template>

<script setup lang="ts">
  import {TimeLinePost} from "../posts";
  import {ref, onMounted} from "vue";

  const props = defineProps<{
    post: TimeLinePost
  }>()

  const title = ref(props.post.title);
  const content = ref(props.post.markdown)
  const contentEditable = ref<HTMLDivElement>();

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

</script>

<style scoped>

</style>