<template>
  <div class="page-container">
    <h1 class="page-title">Login</h1>

    <div class="form-container">
      <div class="form-group">
        <label>Email</label>
        <input 
          type="email"
          v-model="email"
          placeholder="Digite seu email"
        />
      </div>

      <div class="form-group">
        <label>Senha</label>
        <input 
          type="password"
          v-model="password"
          placeholder="Digite sua senha"
        />
      </div>

      <button class="btn btn-primary" @click="login">
        Entrar
      </button>
    </div>
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
  window.location.reload()
  router.push("/produtos")
}
</script>