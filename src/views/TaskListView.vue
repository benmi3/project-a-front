<script setup lang="ts">
import Greet from "../components/Task.vue";
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/tauri";

const task = ref("");
const name = ref("");

async function getTasks() {
  greetMsg.value = await invoke("list_tasks", { });
}
</script>

<template>

</template>

<style scoped>

</style>