import axios from 'axios'
import { useAuthStore } from '../store/auth'

const getApi = () => {
  const auth = useAuthStore()
  return axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
      Authorization: `Bearer ${auth.token}`
    }
  })
}

export const getOrganizations = () => {
  return getApi().get('/organizations')
}
