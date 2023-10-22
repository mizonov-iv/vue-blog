<template>
  <form class="form" @submit.prevent="handleSubmit">
    <FormInput name="Username" :type="'text'" v-model="username" :status="usernameStatus"/>
    <FormInput name="Password" :type="'password'" v-model="password" :status="passwordStatus"/>
    <p v-if="error">{{ error }}</p>
    <button :disabled="isValid">Submit</button>
  </form>
</template>


<script setup lang="ts">
import FormInput from "../components/FormInput.vue";
import {computed, ref} from "vue";
import { validate, lenght, required } from "../validation";
import {NewUser} from "../users";

defineProps<{
  error?: string;
}>();

const emit = defineEmits<{
  (event: 'submit', payload: NewUser): void
}>()

const username = ref("");
const usernameStatus = computed(() => {
  return validate(username.value, [required, lenght({min: 5, max: 10})])
})

const password = ref("");
const passwordStatus = computed(() => {
  return validate(password.value, [required, lenght({min: 8, max: 10})])
})

const isValid = computed(() => {
  return(!usernameStatus.value.valid || !passwordStatus.value.valid)
})

async function handleSubmit() {
  const newUser: NewUser = {
    username: username.value,
    password: password.value
  }

  try {
    emit('submit', newUser)
  } catch (e) {}


}
</script>
