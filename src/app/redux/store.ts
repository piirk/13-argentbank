import { configureStore } from '@reduxjs/toolkit'

let state = {
  value: null,
}

const reducer = (
  currentState: typeof state = state,
  action: { type: string },
) => {
  switch (action.type) {
    default:
      return currentState
  }
}

export const store = configureStore({
  preloadedState: state,
  reducer,
})
