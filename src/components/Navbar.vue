<template>
  <!--  MODAL-->
  <Teleport to="body">
    <div class="modal-background" v-if="modal.show.value">
      <div class="modal-wrapper">
        <button @click="modal.hideModal()">Close Modal</button>
        <SignUpForm/>
      </div>
    </div>
  </Teleport>
  <div>
    <button @click="modal.showModal()">Sign Up</button>
    <RouterLink to="/posts/new">Create new post</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useModal } from "../composables/modal";
import SignUpForm from "./SignUpForm.vue";

const modal = useModal();
</script>
