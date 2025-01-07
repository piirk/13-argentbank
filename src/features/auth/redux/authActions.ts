import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

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
          const errorMessages: Record<number, string> = {
            401: 'Invalid email or password.',
            400: 'Login failed. Please check your credentials.',
            403: '403 - Forbidden. You do not have access.',
            404: '404 - Resource not found.',
            500: '500 - Internal server error.',
          }

          const errorMessage =
            errorMessages[error.response.status] || 'Login failed'
          return rejectWithValue(errorMessage)
        } else if (error.request) {
          return rejectWithValue('Network error. Unable to reach the server.')
        } else {
          console.error('Request setup error:', error.message)
          return rejectWithValue('An error occurred while making the request.')
        }
      } else {
        console.error('Unhandled error:', error)
        return rejectWithValue('An unknown error occurred.')
      }
    }
  },
)
