<template>
  <div class="page-container">
    <h1 class="page-title">Registrar Usuário</h1>

    <div class="form-container">
      <div class="form-group">
        <label>Email</label>
        <input
          type="email"
          v-model="email"
          @input="erro = ''"
        />
      </div>

      <div class="form-group">
        <label>Senha</label>
        <input
          type="password"
          v-model="password"
          @input="erro = ''"
        />
      </div>

      <div class="form-group">
        <label>Confirmar Senha</label>
        <input
          type="password"
          v-model="confirmPassword"
          @input="erro = ''"
        />
      </div>

      <button class="btn btn-primary" @click="registrar">
        Registrar
      </button>

      <!-- MENSAGENS -->
      <p v-if="erro" class="erro">{{ erro }}</p>
      <p v-if="sucesso" class="sucesso">{{ sucesso }}</p>
    </div>
  </div>
</template>

<script>
import authService from "../services/authService"

export default {
  name: "Register",

  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      erro: "",
      sucesso: ""
    }
  },

  methods: {
    async registrar() {
      this.erro = ""
      this.sucesso = ""

      // validação básica
      if (!this.email || !this.password || !this.confirmPassword) {
        this.erro = "Preencha todos os campos"
        return
      }

      if (this.password !== this.confirmPassword) {
        this.erro = "As senhas não coincidem"
        return
      }

      try {
        await authService.register({
          email: this.email,
          password: this.password
        })

        this.sucesso = "Usuário criado com sucesso!"

        setTimeout(() => {
          this.$router.push("/")
        }, 1500)

      } catch (error) {
        console.log(error.response)

        this.erro =
          error.response?.data?.message ||
          JSON.stringify(error.response?.data) ||
          "Erro ao registrar"
      }
    }
  }
}
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 40px auto;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 8px;
}

button {
  width: 100%;
  padding: 10px;
  cursor: pointer;
}

.erro {
  color: #dc2626;
  margin-top: 10px;
  font-weight: 500;
}

.sucesso {
  color: #16a34a;
  margin-top: 10px;
  font-weight: 500;
}
</style>