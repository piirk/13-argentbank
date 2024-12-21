import { configureStore } from '@reduxjs/toolkit'

let state = {
  value: null,
}

const reducer = (currentState, action) => {
  switch (action.type) {
    default:
      return currentState
  }
}

export const store = configureStore({
  preloadedState: state,
  reducer,
})
