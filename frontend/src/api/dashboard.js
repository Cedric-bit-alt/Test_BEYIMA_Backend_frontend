import axios from 'axios'
import { useAuthStore } from '../store/auth'

export const getDashboardSummary = async () => {
  const auth = useAuthStore()
  return axios.get('http://localhost:3000/dashboard/summary', {
    headers: {
      Authorization: `Bearer ${auth.token}`
    }
  })
}
