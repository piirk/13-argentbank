import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
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
