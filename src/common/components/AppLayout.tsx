import { ReactNode } from 'react'
import { Layout } from 'antd'
import AppHeader from './AppHeader'
import Footer from './Footer'

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
      <Footer />
    </Layout>
  )
}

export default AppLayout
