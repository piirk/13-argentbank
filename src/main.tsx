import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './app/App'

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
} else {
  console.error('Failed to find the root element')
}
