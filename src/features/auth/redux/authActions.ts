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
          switch (error.response.status) {
            case 401:
              return rejectWithValue('Invalid email or password.')
            case 400:
              return rejectWithValue(
                'Login failed. Please check your credentials.',
              )
            case 403:
              return rejectWithValue('403 - Forbidden. You do not have access.')
            case 404:
              return rejectWithValue('404 - Resource not found.')
            case 500:
              return rejectWithValue('500 - Internal server error.')
            default:
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
