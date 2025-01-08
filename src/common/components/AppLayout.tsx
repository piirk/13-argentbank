import { ReactNode } from 'react'
import { Layout } from 'antd'
import NavBar from './NavBar'
import Footer from './Footer'

const { Content } = Layout

interface LayoutProps {
  children: ReactNode
  mainClassName?: string
}

const AppLayout = ({ children, mainClassName }: LayoutProps) => {
  return (
    <Layout>
      <NavBar />
      <Content className={mainClassName || 'main'}>{children}</Content>
      <Footer />
    </Layout>
  )
}

export default AppLayout
