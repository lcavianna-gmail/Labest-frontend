export interface Produto {
  id: string
  nome: string
  preco: number
}

export interface ProdutoCreate {
  nome: string
  preco: number
}