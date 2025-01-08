import { Middleware } from '@reduxjs/toolkit'
import axiosInstance from '@services/axiosConfig'
import { logout, setUser } from './authSlice'

const authMiddleware: Middleware = (store) => (next) => async (action) => {
  if (action.type === logout.type) {
    localStorage.removeItem('token')
  }

  return next(action)
}

export default authMiddleware
