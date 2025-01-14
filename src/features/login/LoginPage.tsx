import AppLayout from '@common/components/AppLayout'
import LoginForm from './components/LoginForm'
import styles from './LoginPage.module.scss'

const LoginPage = () => {
  return (
    <AppLayout>
      <section className={styles.login}>
        <i className={`fa fa-user-circle ${styles.loginIcon}`}></i>
        <h1>Sign In</h1>
        <LoginForm />
      </section>
    </AppLayout>
  )
}

export default LoginPage
