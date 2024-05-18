import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { invoke } from "@tauri-apps/api/tauri";

const greetMsg = ref("");
const name = ref("");

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsg.value = await invoke("greet", { name: name.value });
}

interface Task {
  id: number,
  projectId: number,
  title: string,
  done: boolean,
  cid: number,
}

export const mainTaskStore = defineStore('counter', () => {
  // -- state / ref()
  const tasks:Task[] = ref([])
  // --- getters / computed
  //const doubleCount = computed(() => count.value * 2)
  // --- functions / actions
  function getTasks(projectId) {
    tasks.value = await invoke("get_task", { projectId: projectId });
  }
  // returns an object with the properties and methods we want to expose.
  return { tasks, getTasks }
})
