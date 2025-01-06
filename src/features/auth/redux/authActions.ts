import { Dispatch } from 'redux'
import axios from 'axios'
import { setUser, logout } from './authSlice'
import { API_URL } from '@/config'

// Login action
export const login =
  (userData: { email: string; password: string }) =>
  async (dispatch: Dispatch) => {
    try {
      const response = await axios.post(`${API_URL}/user/login`, userData)
      dispatch(setUser(response.data))
    } catch (error) {
      console.error('Login failed', error)
      // todo: handle error properly
    }
  }

// Logout action
export const logoutUser = () => (dispatch: Dispatch) => {
  dispatch(logout())
}
