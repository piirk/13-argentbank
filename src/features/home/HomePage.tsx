import Hero from '@features/home/components/Hero/Hero'
import Features from '@features/home/components/Features/Features'
import AppLayout from '@common/components/AppLayout'

const HomePage = () => {
  return (
    <AppLayout>
      <Hero />
      <Features />
    </AppLayout>
  )
}

export default HomePage
