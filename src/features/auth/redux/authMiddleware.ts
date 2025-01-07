import { Middleware, isAnyOf } from '@reduxjs/toolkit'
import axiosInstance from '@services/axiosConfig'
import { logout, setUser } from './authSlice'

const authMiddleware: Middleware = (store) => (next) => (action) => {
  if (isAnyOf(logout, setUser)(action)) {
    if (action.type === logout.type) {
      localStorage.removeItem('token')
    }
  }

  const token = localStorage.getItem('token')
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  return next(action)
}

export default authMiddleware
