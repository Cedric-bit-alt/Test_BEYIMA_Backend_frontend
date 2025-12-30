import axios from 'axios'
import { useAuthStore } from '../store/auth'

// On crée une fonction pour générer l'instance axios avec le token
const getApiInstance = () => {
  const auth = useAuthStore()   // ✅ Ici, Pinia est actif
  return axios.create({
    baseURL: 'http://localhost:3000',
    headers: { Authorization: `Bearer ${auth.token}` }
  })
}

// Appels API
export const getProjects = () => {
  const api = getApiInstance()
  return api.get('/projects')
}

export const getProjectById = (id) => {
  const api = getApiInstance()
  return api.get(`/projects/${id}`)
}
