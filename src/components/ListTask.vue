<script setup lang="ts">
import { invoke } from '@tauri-apps/api/tauri'
import SingleTask from './SingleTask.vue'
defineProps<{ msg: string }>()

const taskList = ref(0)
async function backendTaskList() {
  taskList = await invoke('tasklist', { title: singletask1 })
}
onMount()
</script>

<template>
  <div class="w-9/12 mx-auto">
    <h1>{{ msg }}</h1>

    <li v-for="(task) in taskList">
       <SingleTask msg="Hello Tauri + Vue!", task=task />
    </li>
  </div>
</template>

