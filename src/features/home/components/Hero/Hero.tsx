import { Layout, Typography, Row, Col } from 'antd'
import styles from './Hero.module.scss'

const { Content } = Layout
const { Title, Text } = Typography

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Content className={styles.heroContent}>
        <h2 className="sr-only">Promoted Content</h2>
        <Title level={4} style={{ margin: 0 }}>
          No fees.
        </Title>
        <Title level={4} style={{ margin: 0 }}>
          No minimum deposit.
        </Title>
        <Title level={4} style={{ margin: 0 }}>
          High interest rates.
        </Title>
        <Text>Open a savings account with Argent Bank today!</Text>
      </Content>
    </div>
  )
}

export default Hero
