import { ReactNode } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
  mainClassName?: string
}

const Layout = ({ children, mainClassName }: LayoutProps) => {
  return (
    <div>
      <NavBar />
      <main className={mainClassName || 'main'}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
