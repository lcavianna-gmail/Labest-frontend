<template>
  <div class="container">
    <h1>Movimentações</h1>

    <button @click="abrirFormulario">
      Nova Movimentação
    </button>

    <br /><br />

    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Produto</th>
          <th>Tipo</th>
          <th>Quantidade</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="m in movimentacoes" :key="m.id">
          <td>{{ m.produtoNome }}</td>
          <td>{{ m.tipo }}</td>
          <td>{{ m.quantidade }}</td>
          <td>{{ formatarData(m.data) }}</td>
        </tr>
      </tbody>
    </table>

    <hr />

    <div v-if="mostrarFormulario">
      <h2>Nova Movimentação</h2>

      <select v-model="novaMovimentacao.produtoId">
        <option disabled value="">Selecione o produto</option>
        <option v-for="p in produtos" :key="p.id" :value="p.id">
          {{ p.nome }}
        </option>
      </select>

      <select v-model="novaMovimentacao.tipo">
        <option value="Entrada">Entrada</option>
        <option value="Saida">Saída</option>
      </select>

      <input
        v-model.number="novaMovimentacao.quantidade"
        type="number"
        placeholder="Quantidade"
      />

      <br /><br />

      <button @click="salvar">Salvar</button>
      <button @click="cancelar">Cancelar</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import movimentacaoService from '../services/movimentacaoService'
import produtoService from '../services/produtoService'

const movimentacoes = ref([])
const produtos = ref([])
const mostrarFormulario = ref(false)

const novaMovimentacao = ref({
  produtoId: '',
  tipo: 'Entrada',
  quantidade: 0
})

async function carregar() {
  const response = await movimentacaoService.listar()
  movimentacoes.value = response.data
}

async function carregarProdutos() {
  const response = await produtoService.listar()
  produtos.value = response.data
}

function abrirFormulario() {
  mostrarFormulario.value = true
}

async function salvar() {
  await movimentacaoService.criar(novaMovimentacao.value)
  mostrarFormulario.value = false
  await carregar()
}

function cancelar() {
  mostrarFormulario.value = false
}

function formatarData(data) {
  return new Date(data).toLocaleDateString()
}

onMounted(() => {
  carregar()
  carregarProdutos()
})
</script>