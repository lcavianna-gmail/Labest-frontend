<template>
  <nav style="background:#1e293b; padding:15px;">

    <router-link 
      v-if="!authStore.isAuthenticated" 
      to="/"
      style="color:white; margin-right:20px;">
      Login
    </router-link>

    <router-link 
      v-if="authStore.isAuthenticated" 
      to="/produtos"
      style="color:white; margin-right:20px;">
      Produtos
    </router-link>

    <router-link 
      v-if="authStore.isAuthenticated" 
      to="/movimentacoes"
      style="color:white; margin-right:20px;">
      Movimentações
    </router-link>

    <button 
      v-if="authStore.isAuthenticated" 
      @click="logout"
      style="margin-left:20px;">
      Logout
    </button>

  </nav>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { authStore } from "../stores/authStore"

const router = useRouter()

const logout = () => {
  authStore.logout()
  router.push("/")
}
</script>