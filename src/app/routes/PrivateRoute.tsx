import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '@redux/store'

const PrivateRoute = () => {
  const token = useSelector((state: RootState) => state.auth.token)
  return token ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
