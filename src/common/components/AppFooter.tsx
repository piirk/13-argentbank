import { Layout, Typography } from 'antd'

const { Footer } = Layout
const { Text } = Typography

const AppFooter = () => {
  return (
    <Footer>
      <Text style={{ textAlign: 'center' }}>
        Copyright ©{new Date().getFullYear()} Argent Bank
      </Text>
    </Footer>
  )
}

export default AppFooter
