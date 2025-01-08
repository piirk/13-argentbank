import { Layout } from 'antd'

const { Footer } = Layout

const AppFooter = () => {
  return (
    <Footer>
      <p className="footer-text">
        Copyright ©{new Date().getFullYear()} Argent Bank
      </p>
    </Footer>
  )
}

export default AppFooter
