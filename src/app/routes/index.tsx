import { Route, Routes } from 'react-router-dom'
import HomePage from '@features/home/pages/HomePage'
import LoginPage from '@features/auth/pages/LoginPage'
import ProfilePage from '@features/profile/pages/ProfilePage'
import PrivateRoute from './PrivateRoute'
import Error404 from './Error404'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}

export default AppRoutes
