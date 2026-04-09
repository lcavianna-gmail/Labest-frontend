<template>
  <div class="page-container">
    <h1 class="page-title">Produtos</h1>

    <button class="btn btn-primary" @click="abrirFormulario">
      Novo Produto
    </button>

    <!-- TABELA -->
    <table class="table">
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
            <button class="btn btn-primary" @click="editar(p)">
              Editar
            </button>

            <button class="btn btn-danger" @click="remover(p.id)">
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- FORMULÁRIO -->
    <div v-if="mostrarFormulario" class="form-container" style="margin-top: 20px;">
      <h2 style="margin-bottom: 15px;">
        {{ editando ? 'Editar Produto' : 'Novo Produto' }}
      </h2>

      <div class="form-group">
        <label>Nome</label>
        <input v-model="produto.nome" placeholder="Nome" />
      </div>

      <div class="form-group">
        <label>Preço</label>
        <input 
          v-model.number="produto.preco" 
          type="number" 
          placeholder="Preço" 
        />
      </div>

      <div class="form-group">
        <label>Quantidade</label>
        <input 
          v-model.number="produto.quantidade" 
          type="number" 
          placeholder="Quantidade" 
        />
      </div>

      <button class="btn btn-primary" @click="salvar">
        Salvar
      </button>

      <button class="btn btn-secondary" @click="cancelar">
        Cancelar
      </button>
    </div>
  </div>
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