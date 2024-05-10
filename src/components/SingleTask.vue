<script setup lang="ts">
import { invoke } from '@tauri-apps/api/tauri'
defineProps<{ msg: string }>()

const taskTitle = ref(0)
async function backendTask() {
  taskTitle = await invoke('task', { title: singletask1 })
}
</script>

<template>
  <div class="w-9/12 mx-auto">
    <h1>{{ msg }}</h1>

    <div class="justify-center my-6 text-center border border-white/10">
      <div class="p-8 text-lg font-bold"> Task is: {{ taskTitle }} </div>

      <div class="w-full space-x-2">

        <button type="button" class="btn" @click="backendTask">Add 2 in backend</button>
      </div>
    </div>
    <p>
      Edit
      <code>src/components/HelloWorld.vue</code> to test hot module replacement. Find the backend
      function from <code>src-tauri/src/main.rs</code>.
    </p>
  </div>
</template>
