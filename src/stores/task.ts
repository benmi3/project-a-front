import {ref} from 'vue'
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

export const mainTaskStore = defineStore('task', () => {
  // -- state / ref()
  const tasks = ref<Task[]>([{
    id: 0,
    projectId: 0,
    title: "Task",
    done: false,
    cid: 0,
  },])
  // --- getters / computed
  //const doubleCount = computed(() => count.value * 2)
  // --- functions / actions
  async function getTasks(projectId: number) {
    tasks.value = await invoke("list_tasks", {});
  }
  // returns an object with the properties and methods we want to expose.
  return { tasks, getTasks }
})


