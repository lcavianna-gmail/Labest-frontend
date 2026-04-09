<template>
  <div class="page-container">
    <h1 class="page-title">Registrar Usuário</h1>

    <div class="form-container">
      <div class="form-group">
        <label>Email</label>
        <input type="email" v-model="email" />
      </div>

      <div class="form-group">
        <label>Senha</label>
        <input type="password" v-model="password" />
      </div>

      <div class="form-group">
        <label>Confirmar Senha</label>
        <input type="password" v-model="confirmPassword" />
      </div>

      <button class="btn btn-primary" @click="register">
        Registrar
      </button>
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
      confirmarSenha: "",
      erro: "",
      sucesso: ""
    }
  },

  methods: {
    async registrar() {

      this.erro = ""
      this.sucesso = ""

      if (this.password !== this.confirmarSenha) {
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
  this.erro = error.response?.data?.message 
           || JSON.stringify(error.response?.data)
           || "Erro ao registrar"
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
  color: red;
  margin-top: 10px;
}

.sucesso {
  color: green;
  margin-top: 10px;
}
</style>