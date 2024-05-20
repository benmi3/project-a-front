import {ref} from 'vue'
import { defineStore } from 'pinia'
import { invoke } from "@tauri-apps/api/tauri";

interface TimeRecord {
  id: number,
  taskId: number,
  place: string,
  starTime: string,
  stopTime: string,
  cid: number,
}

export const mainTimeRecordStore = defineStore('task', () => {
  // -- state / ref()
  const tasks = ref<TimeRecord[]>([{
    id: 0,
    taskId: 0,
    place: "place",
    starTime: "2024-05-02T13:40:39.635577783Z",
    stopTime: "2024-05-03T13:40:39.635577783Z",
    cid: 0,
  },])
  // --- getters / computed
  //const doubleCount = computed(() => count.value * 2)
  // --- functions / actions
  async function getTasks(projectId: number) {
    tasks.value = await invoke("list_timerecords", {});
  }
  // returns an object with the properties and methods we want to expose.
  return { tasks, getTasks }
})


