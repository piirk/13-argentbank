import Hero from '@features/home/components/Hero'
import Features from '@features/home/components/Features'
import Layout from '@components/Layout'

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
