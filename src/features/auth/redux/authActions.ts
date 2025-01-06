import { API_URL } from '@/config'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const login = createAsyncThunk(
  'auth/login',
  async (
    userData: { email: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await axios.post(API_URL + '/user/login', userData)
      return response.data
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 401) {
            return rejectWithValue('Invalid email or password.')
          } else if (error.response.status === 400) {
            return rejectWithValue(
              'Login failed. Please check your credentials.',
            )
          } else if (error.response.status === 403) {
            return rejectWithValue('Forbidden. You do not have access.')
          } else if (error.response.status === 404) {
            return rejectWithValue('Resource not found.')
          } else if (error.response.status === 500) {
            return rejectWithValue('Internal server error.')
          } else {
            return rejectWithValue(error.response.data || 'Login failed')
          }
        } else if (error.request) {
          return rejectWithValue('Network error. Unable to reach the server.')
        } else {
          return rejectWithValue('An error occurred while making the request.')
        }
      } else {
        return rejectWithValue('An unknown error occurred.')
      }
    }
  },
)
