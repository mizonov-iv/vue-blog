<template>
  <!--MODAL-->
  <Teleport to="body">
    <div class="modal-background" v-if="modal.show.value">
      <div class="modal-wrapper">
        <button class="modal-close" @click="modal.hideModal()">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8.92473 7.99916L13.6122 2.41166C13.6908 2.31881 13.6247 2.17773 13.5033 2.17773H12.0783C11.9944 2.17773 11.914 2.21523 11.8587 2.27952L7.99258 6.88845L4.12651 2.27952C4.07294 2.21523 3.99258 2.17773 3.90687 2.17773H2.48187C2.36044 2.17773 2.29437 2.31881 2.37294 2.41166L7.06044 7.99916L2.37294 13.5867C2.35534 13.6074 2.34405 13.6327 2.3404 13.6596C2.33676 13.6865 2.34092 13.7139 2.35239 13.7386C2.36386 13.7632 2.38216 13.784 2.40511 13.7985C2.42806 13.8131 2.4547 13.8207 2.48187 13.8206H3.90687C3.9908 13.8206 4.07115 13.7831 4.12651 13.7188L7.99258 9.10988L11.8587 13.7188C11.9122 13.7831 11.9926 13.8206 12.0783 13.8206H13.5033C13.6247 13.8206 13.6908 13.6795 13.6122 13.5867L8.92473 7.99916Z" fill="black" fill-opacity="0.45"/>
          </svg>
        </button>
        <component :is="modal.component.value" />
      </div>
    </div>
  </Teleport>
  <!--NAVIGATION-->
  <div>
    <div v-if="usersStore.currentUserId">
      <button class="btn" @click="logout">Log Out</button>
      <RouterLink class="btn create" to="/posts/new">Create new post</RouterLink>
    </div>
    <div v-else>
      <button class="btn" @click="modal.showModal('signUp')">Sign Up</button>
      <button class="btn" @click="modal.showModal('signIn')">Sign In</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModal } from "../composables/modal";
import {useUsers} from "../stores/users";
import {useRouter} from "vue-router";

const modal = useModal();
const usersStore = useUsers();
const router = useRouter();

async function logout() {
  await usersStore.logout();
  router.push({path: "/"})
}

</script>
