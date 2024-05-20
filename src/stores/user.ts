import {ref} from 'vue'
import { defineStore } from 'pinia'
import { invoke } from "@tauri-apps/api/tauri";

interface Project {
  id: number,
  username: string,
}

export const mainUserStore = defineStore('task', () => {
  // -- state / ref()
  const userInfo = ref<Project>({
    id: 0,
    username: "username",
  })
  const username = ref("")
  const loginFails = ref<number>(0)
  // --- getters / computed
  //const doubleCount = computed(() => count.value * 2)
  // --- functions / actions
  async function loginUser(password: string) {
    userInfo.value = await invoke("login", {username: username.value, password: password});
    if (userInfo.value.username === username.value) {
      loginFails.value = 0;
    } else {
      loginFails.value++;
    }
  }
  // returns an object with the properties and methods we want to expose.
  return { userInfo, loginUser, loginFails }
})


