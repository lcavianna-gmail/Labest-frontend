import api from './api'

export default {

  listar() {
    return api.get('/Produto')
  },

  buscarPorId(id) {
    return api.get(`/Produto/${id}`)
  },

  criar(produto) {
    return api.post('/Produto', produto)
  },

  atualizar(id, produto) {
    return api.put(`/Produto/${id}`, produto)
  },

  deletar(id) {
    return api.delete(`/Produto/${id}`)
  }

}