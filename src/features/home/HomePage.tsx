import Hero from '@features/home/components/Hero'
import Features from '@features/home/components/Features'
import AppLayout from '@common/components/AppLayout'

const HomePage = () => {
  return (
    <div>
      <AppLayout>
        <Hero />
        <Features />
      </AppLayout>
    </div>
  )
}

export default HomePage
