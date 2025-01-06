import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.scss'
import 'antd/dist/reset.css'
import App from './app/App'

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>,
  )
} else {
  console.error('Failed to find the root element')
}
