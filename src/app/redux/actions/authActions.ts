import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '@services/axiosConfig'
import { setUser } from '../slices/authSlice'
import { User } from '@common/models/User'

export const login = createAsyncThunk(
  'auth/login',
  async (userData: { email: string; password: string }, { dispatch }) => {
    const loginResponse = await axiosInstance.post('/user/login', userData)
    const { token } = loginResponse.data.body
    localStorage.setItem('token', token)

    const profileResponse = await axiosInstance.post('/user/profile', {})
    const user: User = profileResponse.data.body
    dispatch(setUser(user))

    return { user, token }
  },
)

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async (userData: { firstName: string; lastName: string }, { dispatch }) => {
    const response = await axiosInstance.put('/user/profile', userData)
    const user: User = response.data.body
    dispatch(setUser(user))
    return user
  },
)
