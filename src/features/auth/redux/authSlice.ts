import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '@services/axiosConfig'

interface User {
  id: string
  email: string
  firstName: string
  lastName: string
}

interface AuthState {
  user: User | null
  token: string | null
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
}

export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const response = await axiosInstance.post('/user/profile', {})
        return response.data.body
      } catch (error) {
        return rejectWithValue('Failed to fetch user')
      }
    } else {
      return rejectWithValue('No token found')
    }
  },
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload
      state.token = localStorage.getItem('token')
    },
    logout(state) {
      state.user = null
      state.token = null
      localStorage.removeItem('token')
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.user = action.payload
    })
    builder.addCase(checkAuth.rejected, (state) => {
      state.user = null
      state.token = null
      localStorage.removeItem('token')
    })
  },
})

export const { setUser, logout } = authSlice.actions
export default authSlice.reducer
