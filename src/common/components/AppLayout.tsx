import { ReactNode } from 'react'
import { Layout } from 'antd'
import AppHeader from './AppHeader/AppHeader'
import AppFooter from './AppFooter'

const { Content } = Layout

interface LayoutProps {
  children: ReactNode
}

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppHeader />
      <Content>{children}</Content>
      <AppFooter />
    </Layout>
  )
}

export default AppLayout
