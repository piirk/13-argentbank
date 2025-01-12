import { ConfigProvider } from 'antd'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@redux/store'
import { checkAuth } from '@redux/slices/authSlice'
import Routes from './routes'
import './App.css'
import { useEffect } from 'react'

const App = () => {
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])

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
