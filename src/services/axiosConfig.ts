import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const errorMessages: Record<number, string> = {
          400: 'Bad request. Please check your input.',
          401: 'Unauthorized. Please log in again.',
          403: 'Forbidden. You do not have access.',
          404: 'Resource not found.',
          500: 'Internal server error.',
        }

        const errorMessage =
          errorMessages[error.response.status] || 'An error occurred'
        return Promise.reject(errorMessage)
      } else if (error.request) {
        return Promise.reject('Network error. Unable to reach the server.')
      } else {
        console.error('Request setup error:', error.message)
        return Promise.reject('An error occurred while making the request.')
      }
    } else {
      console.error('Unhandled error:', error)
      return Promise.reject('An unknown error occurred.')
    }
  },
)

export default axiosInstance
