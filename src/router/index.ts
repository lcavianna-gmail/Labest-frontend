import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Produtos from "../views/Produtos.vue"
import Movimentacoes from "../views/Movimentacoes.vue"
import Auditoria from "../views/Auditoria.vue"


const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Login },
  { path: "/register", component: Register },
  { path: "/produtos", component: Produtos },
  { path: "/movimentacoes", component: Movimentacoes },
  {  path: "/auditoria",component: Auditoria}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router