import { Layout, Typography } from 'antd'
import AppLayout from '@common/components/AppLayout'
import LoginForm from './components/LoginForm'
import styles from './LoginPage.module.scss'

const { Content } = Layout
const { Title } = Typography

const LoginPage = () => {
  return (
    <AppLayout>
      <Content className={styles.login}>
        <i className={`fa fa-user-circle ${styles.loginIcon}`}></i>
        <Title level={1}>Sign In</Title>
        <LoginForm />
      </Content>
    </AppLayout>
  )
}

export default LoginPage
