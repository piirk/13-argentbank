import { ConfigProvider } from 'antd'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@redux/store'
import { checkAuth } from '@redux/slices/authSlice'
import Routes from './routes'
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
        components: {
          Card: {
            bodyPadding: 8,
            headerPadding: 8,
          },
        },
      }}
    >
      <Routes />
    </ConfigProvider>
  )
}

export default App
