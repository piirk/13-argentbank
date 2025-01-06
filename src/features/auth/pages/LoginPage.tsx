import Layout from '@components/Layout'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
  return (
    <Layout mainClassName="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <LoginForm />
      </section>
    </Layout>
  )
}

export default LoginPage
