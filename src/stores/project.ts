import {ref} from 'vue'
import { defineStore } from 'pinia'
import { invoke } from "@tauri-apps/api/tauri";

interface Project {
  id: number,
  name: string,
  ownerId: number,
  cid: number,
}

export const mainProjectStore = defineStore('task', () => {
  // -- state / ref()
  const projects = ref<Project[]>([{
    id: 0,
    name: "ProjectName",
    ownerId: 0,
    cid: 0,
  },])
  // --- getters / computed
  //const doubleCount = computed(() => count.value * 2)
  // --- functions / actions
  async function getProjects() {
    projects.value = await invoke("list_projects", {});
  }
  // returns an object with the properties and methods we want to expose.
  return { projects, getProjects }
})


