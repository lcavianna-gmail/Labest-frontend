📦 Labest Frontend  
📌 Propósito do Projeto  

O Labest Frontend é uma aplicação SPA (Single Page Application) desenvolvida como desafio teste para consumir a API do Labest Backend.  

O projeto tem como objetivo:  

Demonstrar integração com API REST  
Aplicar boas práticas com Vue 3  
Organizar a interface de forma modular e escalável  
Implementar autenticação baseada em JWT  
Controlar rotas protegidas e públicas  
Simular um cenário real de sistema corporativo  

Este frontend faz parte do ecossistema Labest:  

👉 Backend: https://github.com/lcavianna-gmail/Labest-backend  

🏗️ Arquitetura  

A aplicação segue uma estrutura modular baseada em componentes reutilizáveis:  

src/  
│  
├── assets/        → Arquivos estáticos  
├── components/    → Componentes reutilizáveis  
├── views/         → Páginas da aplicação  
├── router/        → Configuração de rotas  
├── services/      → Comunicação com API  
├── utils/         → Funções auxiliares  
└── App.vue        → Componente principal  

🛠️ Tecnologias Utilizadas  
🔹 Core  
Vue.js  
Vite  
JavaScript  
HTML5 + CSS3  

🔹 Comunicação com API  
Axios  
REST API  

🔹 Roteamento  
Vue Router  

🔹 Estado da Aplicação (quando necessário)  
Estado local com Composition API  
Gerenciamento leve de estado via reatividade do Vue  
🔐 Autenticação e Segurança  

A aplicação implementa autenticação via JWT, permitindo:  

Login de usuário  
Armazenamento de token  
Proteção de rotas privadas  
Controle de acesso baseado em autenticação  

🧭 Rotas  

A aplicação é dividida em:  

🔓 Públicas  
Login  
Registro (se aplicável)  

🔒 Privadas
Produtos
Movimentações  

📡 Integração com Backend  

O frontend consome a API do Labest Backend através de chamadas HTTP centralizadas na camada:  

services/  

Responsável por:  

Requisições GET / POST / PUT / DELETE  
Interceptação de token JWT  
Organização das chamadas à API  

🚀 Como Executar o Projeto  
1️⃣ Clonar o repositório  
git clone https://github.com/lcavianna-gmail/Labest-frontend.git  

2️⃣ Instalar dependências  
npm install  

3️⃣ Rodar o projeto  
npm run dev  


A aplicação será executada em:  

http://localhost:5173 

📌 Evoluções Futuras  
Vuex/Pinia (estado global, se necessário)  
Testes unitários (Vitest)  
Dockerização  
CI/CD  
Melhorias de UX/UI  
Cache de requisições  
Lazy loading de módulos  

👨‍💻 Autor

Luiz Claudio de Almeida Vianna  
Frontend Developer | Vue.js | SPA Architecture
