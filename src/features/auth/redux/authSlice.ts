import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// todo: use models
interface User {
  id: string
  email: string
  firstName: string
  lastName: string
}

interface AuthState {
  user: User | null
}

const initialState: AuthState = {
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload
    },
    logout(state) {
      state.user = null
    },
  },
})

export const { setUser, logout, checkAuth } = authSlice.actions
export default authSlice.reducer
