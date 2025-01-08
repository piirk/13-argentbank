// filepath: /src/common/components/NavBar.tsx
import { Link, useNavigate } from 'react-router-dom'
import Logo from '@assets/img/argentBankLogo.png'
import { Button, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { logout } from '@features/auth/redux/authSlice'

const NavBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state: RootState) => state.auth.user)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {user ? (
          <>
            <Link to="/profile">
              <Button
                type="text"
                icon={<i className="fa fa-user-circle"></i>}
                style={{ fontWeight: 'bold' }}
                size="large"
              >
                {user.firstName}
              </Button>
            </Link>

            <Button
              type="text"
              icon={<i className="fa fa-sign-out"></i>}
              style={{ fontWeight: 'bold' }}
              size="large"
              onClick={handleLogout}
            >
              Log Out
            </Button>
          </>
        ) : (
          <Link className="main-nav-item" to="/login">
            <Button
              type="text"
              icon={<i className="fa fa-user-circle"></i>}
              style={{ fontWeight: 'bold' }}
              size="large"
            >
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default NavBar
