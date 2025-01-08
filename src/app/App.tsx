import { ConfigProvider } from 'antd'
import { useDispatch } from 'react-redux'
import { checkAuth } from '@features/auth/redux/authSlice'
import Routes from './routes'
import './App.css'
import { useEffect } from 'react'

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00bc77',
        },
      }}
    >
      <Routes />
    </ConfigProvider>
  )
}

export default App
