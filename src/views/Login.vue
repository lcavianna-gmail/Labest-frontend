<template>
  <div>
    <h2>Login</h2>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Senha" />
    <button @click="login">Entrar</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"
import api from "../services/api"
import type { LoginRequest, AuthResponse } from "../types/auth"

const email = ref<string>("")
const password = ref<string>("")
const router = useRouter()

async function login() {
  const payload: LoginRequest = {
    email: email.value,
    password: password.value
  }

  const response = await api.post<AuthResponse>("/auth/login", payload)

  localStorage.setItem("token", response.data.token)
  router.push("/produtos")
}
</script>