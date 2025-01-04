import React from 'react'
import NavBar from '../../../common/components/NavBar'
import Hero from '../../../common/components/Hero'
import Features from '../../../common/components/Features'
import Footer from '../../../common/components/Footer'
import Layout from '../../../common/components/Layout'

const HomePage = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Features />
      </Layout>
    </div>
  )
}

export default HomePage
