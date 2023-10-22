<template>
  <h2>Sign Up Form</h2>
  <UserForm @submit="handleSignUp" />
</template>

<script lang="ts" setup>
import UserForm from "./UserForm.vue";
import {useUsers} from "../stores/users";
import {useModal} from "../composables/modal";
import {NewUser} from "../users";

const usersStore = useUsers();
const modal = useModal();

async function handleSignUp (newUser: NewUser) {
  await usersStore.createNewUser(newUser);
  modal.hideModal();
}
</script>