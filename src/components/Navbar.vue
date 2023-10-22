<template>
  <!--MODAL-->
  <Teleport to="body">
    <div class="modal-background" v-if="modal.show.value">
      <div class="modal-wrapper">
        <button @click="modal.hideModal()">Close Modal</button>
        <component :is="modal.component.value" />
      </div>
    </div>
  </Teleport>
  <!--NAVIGATION-->
  <div>
    <div v-if="usersStore.currentUserId">
      <button @click="usersStore.logout()">Log Out</button>
      <RouterLink to="/posts/new">Create new post</RouterLink>
    </div>
    <div v-else>
      <button @click="modal.showModal('signUp')">Sign Up</button>
      <button @click="modal.showModal('signIn')">Sign In</button>
<!--      <button @click="modal.showModal()">Log In</button>-->
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModal } from "../composables/modal";
import {useUsers} from "../stores/users";

const modal = useModal();
const usersStore = useUsers();

</script>
