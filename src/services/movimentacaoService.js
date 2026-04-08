import api from './api'

export default {

  listar() {
    return api.get('/Movimentacao')
  },

  criar(movimentacao) {
    return api.post('/Movimentacao', movimentacao)
  }

}