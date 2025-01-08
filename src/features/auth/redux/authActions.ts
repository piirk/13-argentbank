import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '@services/axiosConfig'
import { setUser } from './authSlice'

export const login = createAsyncThunk(
  'auth/login',
  async (userData: { email: string; password: string }, { dispatch }) => {
    const loginResponse = await axiosInstance.post('/user/login', userData)
    const { token } = loginResponse.data.body
    localStorage.setItem('token', token)

    const profileResponse = await axiosInstance.post('/user/profile', {})
    const user = profileResponse.data.body
    dispatch(setUser(user))

    return { user, token }
  },
)

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (userData: { firstName: string; lastName: string }, { dispatch }) => {
    const response = await axiosInstance.put('/user/profile', userData)
    const user = response.data.body
    dispatch(setUser(user))
    return user
  },
)
