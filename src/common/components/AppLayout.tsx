import { ReactNode } from 'react'
import { Layout } from 'antd'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

const { Content } = Layout

interface LayoutProps {
  children: ReactNode
  mainClassName?: string
}

const AppLayout = ({ children, mainClassName }: LayoutProps) => {
  return (
    <Layout>
      <AppHeader />
      <Content className={mainClassName || 'main'}>{children}</Content>
      <AppFooter />
    </Layout>
  )
}

export default AppLayout
