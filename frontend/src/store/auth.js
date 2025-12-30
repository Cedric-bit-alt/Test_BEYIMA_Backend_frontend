import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null,
    loading: false,
    error: null,
  }),
  actions: {
    async login(email, password) {
      this.loading = true
      this.error = null
      try {
        const res = await axios.post('http://localhost:3000/auth/login', { email, password })
          //Adpte selon ton token
        this.token = res.data.access_token
        this.user = res.data.user

        //Sauvegarde(Important)
        localStorage.setItem('token', this.token)
      } catch (err) {
        this.error = err.response?.data?.message || 'Erreur inconnue'
      } finally {
        this.loading = false
      }
    },
    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem('token')
    }
  }
})
