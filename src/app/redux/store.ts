import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@features/auth/redux/authSlice'
//import authMiddleware from '@features/auth/redux/authMiddleware'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  //middleware: (getDefaultMiddleware) =>
  //  getDefaultMiddleware().concat(authMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
