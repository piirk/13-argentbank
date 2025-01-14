import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from '@assets/img/argentBankLogo.png'
import { Button, Layout, Menu, Modal } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { logout } from '@redux/slices/authSlice'
import type { MenuProps } from 'antd'
import { useState, useEffect } from 'react'
import styles from './AppHeader.module.scss'

const { Header } = Layout

const AppHeader = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const user = useSelector((state: RootState) => state.auth.user)

  const [current, setCurrent] = useState(location.pathname)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setCurrent(location.pathname)
  }, [location.pathname])

  const showLogoutConfirm = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
    dispatch(logout())
    navigate('/')
  }

  const handleCancel = () => {
    setIsModalOpen(false)
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
          onClick: showLogoutConfirm,
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
    <Header className={styles.nav}>
      <Link className={styles.navLogo} to="/">
        <img className={styles.navLogoImg} src={Logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <Menu
        selectedKeys={[current]}
        items={items}
        mode="horizontal"
        disabledOverflow={true}
      />
      <Modal
        title="Confirm Logout"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Yes, Logout"
        cancelText="Cancel"
      >
        <p>Are you sure you want to log out?</p>
      </Modal>
    </Header>
  )
}

export default AppHeader
