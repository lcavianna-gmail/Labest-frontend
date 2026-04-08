<template>
  <div class="container">
    <h1>Produtos</h1>

    <button @click="abrirFormulario">
      Novo Produto
    </button>

    <br /><br />

    <div v-if="mostrarFormulario">
      <h2>{{ editando ? 'Editar Produto' : 'Novo Produto' }}</h2>

      <label>Nome:</label>
      <input v-model="produto.nome" placeholder="Nome" /> <br/>
      <label>Preço:</label>
      <input v-model.number="produto.preco" type="number" placeholder="Preço" /><br/>
      <label>Quantidade:</label>
      <input v-model.number="produto.quantidade" type="number" placeholder="Quantidade" />

      <br /><br />

      <button @click="salvar">Salvar</button>
      <button @click="cancelar">Cancelar</button>
    </div>
  </div>

  <br /><br />

    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in produtos" :key="p.id">
          <td>{{ p.nome }}</td>
          <td>{{ p.preco }}</td>
          <td>{{ p.quantidade }}</td>
          <td>
            <button @click="editar(p)">Editar</button>
            <button @click="remover(p.id)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>

    <hr />

    
</template>

<script setup>
import { ref, onMounted } from 'vue'
import produtoService from '../services/produtoService'

const produtos = ref([])
const mostrarFormulario = ref(false)
const editando = ref(false)

const produto = ref({
  id: null,
  nome: '',
  preco: 0,
  quantidade: 0
})

async function carregar() {
  const response = await produtoService.listar()
  produtos.value = response.data
}

function abrirFormulario() {
  editando.value = false
  produto.value = { id: null, nome: '', preco: 0, quantidade: 0 }
  mostrarFormulario.value = true
}

function editar(p) {
  editando.value = true
  produto.value = { ...p }
  mostrarFormulario.value = true
}

async function salvar() {
  if (editando.value) {
    await produtoService.atualizar(produto.value.id, produto.value)
  } else {
    await produtoService.criar(produto.value)
  }

  mostrarFormulario.value = false
  await carregar()
}

async function remover(id) {
  await produtoService.deletar(id)
  await carregar()
}

function cancelar() {
  mostrarFormulario.value = false
}

onMounted(carregar)
</script>