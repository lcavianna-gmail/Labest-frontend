export interface Movimentacao {
  id: string
  produtoId: string
  tipo: string
  quantidade: number
}

export interface MovimentacaoCreate {
  produtoId: string
  tipo: string
  quantidade: number
}