import {ref} from 'vue'
import { defineStore } from 'pinia'
import { invoke } from "@tauri-apps/api/tauri";

interface TaskProgress {
  id: number,
  taskId: number,
  progress: number,
  cid: number,
}

export const mainTimeProgressStore = defineStore('task', () => {
  // -- state / ref()
  const taskprogresses = ref<TaskProgress[]>([{
    id: 0,
    taskId: 0,
    progress: 0,
    cid: 0,
  },])
  // --- getters / computed
  //const doubleCount = computed(() => count.value * 2)
  // --- functions / actions
  async function getTaskProgressess(taskId: number) {
    taskprogresses.value = await invoke("list_taskprogresses", {});
  }
  // returns an object with the properties and methods we want to expose.
  return { taskprogresses, getTaskProgressess }
})


