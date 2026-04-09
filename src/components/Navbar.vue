<template>
  <nav style="background:#1e293b; padding:15px;">

    <!-- NÃO LOGADO -->
    <template v-if="!isAuthenticated">
      <router-link to="/" style="color:white; margin-right:20px;">
        Login
      </router-link>

      <router-link to="/register" style="color:white; margin-right:20px;">
        Criar Conta
      </router-link>
    </template>

    <!-- LOGADO -->
    <template v-else>
      <router-link to="/produtos" style="color:white; margin-right:20px;">
        Produtos
      </router-link>

      <router-link to="/auditoria" style="color:white; margin-right:20px;">
        Auditoria
      </router-link>

      <router-link to="/movimentacoes" style="color:white; margin-right:20px;">
        Movimentações
      </router-link>

      <button @click="logout" style="margin-left:20px;">
        Logout
      </button>
    </template>

  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const isAuthenticated = ref(false)

onMounted(() => {
  isAuthenticated.value = !!localStorage.getItem("token")
})

const logout = () => {
  localStorage.removeItem("token")
  isAuthenticated.value = false
  router.push("/")
}
</script>