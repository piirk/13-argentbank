import { Layout, Typography } from 'antd'
import UserOutlined from '@ant-design/icons/UserOutlined'
import AppLayout from '@common/components/AppLayout'
import LoginForm from './components/LoginForm'
import styles from './LoginPage.module.scss'

const { Content } = Layout
const { Title } = Typography

const LoginPage = () => {
  return (
    <AppLayout>
      <Content className={styles.login}>
        <UserOutlined className={styles.loginIcon} />
        <Title level={1}>Sign In</Title>
        <LoginForm />
      </Content>
    </AppLayout>
  )
}

export default LoginPage
