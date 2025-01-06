import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const login = createAsyncThunk(
  'auth/login',
  async (
    userData: { email: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await axios.post('/api/v1/user/login', userData)
      return response.data // Retourne les données de l'utilisateur ou du token
    } catch (error: Error | any) {
      return rejectWithValue(error.response?.data || 'Login failed') // Retourne l'erreur
    }
  },
)
