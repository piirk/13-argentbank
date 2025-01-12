import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from '@assets/img/argentBankLogo.png'
import { Button, Layout, Menu } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { logout } from '@redux/slices/authSlice'
import type { MenuProps } from 'antd'
import { useState, useEffect } from 'react'

const { Header } = Layout

const AppHeader = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const user = useSelector((state: RootState) => state.auth.user)

  const [current, setCurrent] = useState(location.pathname)

  useEffect(() => {
    setCurrent(location.pathname)
  }, [location.pathname])

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  type MenuItem = Required<MenuProps>['items'][number]
  const items: MenuItem[] = user
    ? [
        {
          key: '/',
          icon: <i className="fa fa-home"></i>,
          label: <Link to="/">Home</Link>,
        },
        {
          key: '/profile',
          icon: <i className="fa fa-user"></i>,
          label: <Link to="/profile">{user.firstName}</Link>,
        },
        {
          key: 'logout',
          icon: <i className="fa fa-sign-out"></i>,
          label: 'Log Out',
          onClick: handleLogout,
        },
      ]
    : [
        {
          key: '/',
          icon: <i className="fa fa-home"></i>,
          label: <Link to="/">Home</Link>,
        },
        {
          key: '/login',
          icon: <i className="fa fa-sign-in"></i>,
          label: <Link to="/login">Sign In</Link>,
        },
      ]

  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#fff',
      }}
    >
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <Menu
        selectedKeys={[current]}
        items={items}
        mode="horizontal"
        disabledOverflow={true}
      />
    </Header>
  )
}

export default AppHeader
