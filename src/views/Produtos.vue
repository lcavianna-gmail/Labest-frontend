<template>
  <div>
    <h2>Produtos</h2>

    <input v-model="nome" placeholder="Nome" />
    <input v-model="preco" type="number" placeholder="Preço" />
    <button @click="salvar">Salvar</button>

    <ul>
      <li v-for="p in produtos" :key="p.id">
        {{ p.nome }} - R$ {{ p.preco }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import api from "../services/api"
import type { Produto, ProdutoCreate } from "../types/produto"

const nome = ref<string>("")
const preco = ref<number | null>(null)
const produtos = ref<Produto[]>([])

async function carregar() {
  const response = await api.get<Produto[]>("/produto")
  produtos.value = response.data
}

async function salvar() {
  if (!preco.value) return

  const payload: ProdutoCreate = {
    nome: nome.value,
    preco: preco.value
  }

  await api.post("/produto", payload)

  nome.value = ""
  preco.value = null
  carregar()
}

onMounted(carregar)
</script>