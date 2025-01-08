import { Middleware, isAnyOf } from '@reduxjs/toolkit'
import axiosInstance from '@services/axiosConfig'
import { logout, setUser } from './authSlice'

const authMiddleware: Middleware = (store) => (next) => async (action) => {
  if (isAnyOf(logout, setUser)(action)) {
    if (action.type === logout.type) {
      localStorage.removeItem('token')
    }
  }

  const token = localStorage.getItem('token')
  if (token) {
    try {
      const response = await axiosInstance.post('/user/profile', {})
      return response.data.body
    } catch (error) {
      console.error('Failed to fetch user', error)
      return next(action)
    }
    console.error('No token found')
    return next(action)
    return rejectWithValue('No token found')
  }

  return next(action)
}

export default authMiddleware
