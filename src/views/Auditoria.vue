<template>
  <div class="page-container">
    <h1 class="page-title">Logs de Auditoria</h1>

    <table class="table" v-if="logs.length">
      <thead>
        <tr>
          <th>Usuário</th>
          <th>Ação</th>
          <th>Entidade</th>
          <th>Data</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="log in logs" :key="log.data + log.acao">
          <td>{{ log.usuario }}</td>
          <td>{{ log.acao }}</td>
          <td>{{ log.entidade }}</td>
          <td>{{ formatarData(log.data) }}</td>
        </tr>
      </tbody>
    </table>

    <p v-else>Nenhum log encontrado.</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import api from "../services/api"

interface LogAuditoria {
  usuario: string
  acao: string
  entidade: string
  data: string
}

const logs = ref<LogAuditoria[]>([])

async function carregarLogs() {
  try {
    const response = await api.get<LogAuditoria[]>("/auditoria")
    logs.value = response.data
  } catch (error) {
    console.error("Erro ao carregar logs", error)
  }
}

function formatarData(data: string) {
  return new Date(data).toLocaleString("pt-BR")
}

onMounted(() => {
  carregarLogs()
})
</script>