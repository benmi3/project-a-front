<script setup lang="ts">
import { mainUserStore } from '../stores/user.ts'
import { storeToRefs } from 'pinia'
import { ref } from "vue";

const password = ref("")

const store = mainUserStore()

const { userInfo, loginFails } = storeToRefs(store)

const { loginUser } = store

</script>

<template>
  <form class="row" @submit.prevent="loginUser(password.valueOf())">
  <input id="username" v-model="userInfo.username" placeholder="Enter a name..." />
  <input id="password" v-model="password.value" placeholder="Enter a name..." />
    <button type="submit">Login</button>
  </form>
  <p>{{ userInfo.username }}</p>
  <p>{{ loginFails}}</p>
</template>
