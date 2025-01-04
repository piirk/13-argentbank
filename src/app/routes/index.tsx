import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../features/home/pages/HomePage'
import LoginPage from '../../features/auth/pages/LoginPage'
import ProfilePage from '../../features/profile/pages/ProfilePage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  )
}

export default AppRoutes
