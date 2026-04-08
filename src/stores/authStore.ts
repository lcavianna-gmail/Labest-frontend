import { reactive, computed } from "vue"

const state = reactive({
  token: localStorage.getItem("token")
})

const isAuthenticated = computed(() => !!state.token)

const login = (token: string) => {
  state.token = token
  localStorage.setItem("token", token)
}

const logout = () => {
  state.token = null
  localStorage.removeItem("token")
}

export const authStore = {
  state,
  isAuthenticated,
  login,
  logout
}