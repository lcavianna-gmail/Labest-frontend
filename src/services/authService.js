import axios from "axios"

const API_URL = "https://localhost:7064/api/auth"

export default {

  async register(data) {
    return await axios.post(`${API_URL}/register`, data)
  },

  async login(data) {
    return await axios.post(`${API_URL}/login`, data)
  }

}