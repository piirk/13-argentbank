import { Layout } from 'antd'

const { Footer } = Layout

const AppFooter = () => {
  return (
    <Footer>
      <p style={{ textAlign: 'center' }}>
        Copyright ©{new Date().getFullYear()} Argent Bank
      </p>
    </Footer>
  )
}

export default AppFooter
