import React from 'react'
import { ConfigProvider } from 'antd'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Routes from './routes'
import './App.css'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00bc77',
        },
      }}
    >
      <Provider store={store}>
        <Routes />
      </Provider>
    </ConfigProvider>
  )
}

export default App
