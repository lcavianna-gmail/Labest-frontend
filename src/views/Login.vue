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
          @input="erro = ''"
        />
      </div>

      <div class="form-group">
        <label>Senha</label>
        <input 
          type="password"
          v-model="password"
          placeholder="Digite sua senha"
          @input="erro = ''"
        />
      </div>

      <button class="btn btn-primary" @click="login">
        Entrar
      </button>

      <!-- MENSAGENS -->
      <p v-if="erro" class="erro">{{ erro }}</p>
      <p v-if="sucesso" class="sucesso">{{ sucesso }}</p>
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
const erro = ref<string>("")
const sucesso = ref<string>("")

const router = useRouter()

async function login() {
  erro.value = ""
  sucesso.value = ""

  // validação básica
  if (!email.value || !password.value) {
    erro.value = "Preencha email e senha"
    return
  }

  const payload: LoginRequest = {
    email: email.value,
    password: password.value
  }

  try {
    const response = await api.post<AuthResponse>("/auth/login", payload)

    localStorage.setItem("token", response.data.token)

    sucesso.value = "Login realizado com sucesso!"

    setTimeout(() => {
      window.location.reload()
      router.push("/produtos")
    }, 800)

  } catch (err: any) {
    console.log(err?.response)

    erro.value =
      err?.response?.data?.message ||
      "Email ou senha inválidos"
  }
}
</script>

<style scoped>
.erro {
  color: #dc2626;
  margin-top: 10px;
  font-weight: 500;
}

.sucesso {
  color: #16a34a;
  margin-top: 10px;
  font-weight: 500;
}
</style>