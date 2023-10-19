<template>
  <!--  MAIN APP-->
  <div class="container">
    <Navbar/>
    <RouterView/>
  </div>
</template>


<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import {useUsers} from "./stores/users";
import {onMounted} from "vue";

const usersStore = useUsers();
// usersStore.authenticate();
</script>
