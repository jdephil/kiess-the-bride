import axios, { AxiosError } from 'axios'
import { useAuth } from 'src/stores/auth'
import { getCookie } from 'src/utils/get-cookie'

const baseURL = `${window.location.protocol}//${window.location.host}/api`

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(
  async (config) => {
    const { token } = useAuth.getState()

    const csrfToken = getCookie('csrftoken')
    if (config.headers) {
      config.headers['X-CSRFToken'] = csrfToken
    } else {
      config.headers = new axios.AxiosHeaders({
        'X-CSRFToken': csrfToken,
      })
    }

    return { ...config }
  },
  (error: Error | AxiosError) => {
    return Promise.reject(error)
  },
)
