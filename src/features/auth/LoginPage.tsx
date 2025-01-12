import AppLayout from '@common/components/AppLayout'
import LoginForm from './components/LoginForm'

const LoginPage = () => {
  return (
    <AppLayout>
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <LoginForm />
      </section>
    </AppLayout>
  )
}

export default LoginPage
