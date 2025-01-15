import { Card, Row, Col, Typography, Layout } from 'antd'
import iconChat from '@assets/img/icon-chat.png'
import iconMoney from '@assets/img/icon-money.png'
import iconSecurity from '@assets/img/icon-security.png'
import styles from './Features.module.scss'

const { Content } = Layout
const { Title, Text } = Typography

const Features = () => {
  return (
    <Content className={styles.features}>
      <h2 className="sr-only">Features</h2>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} lg={8}>
          <Card className={styles.featureItem} bordered={false}>
            <img
              src={iconChat}
              alt="Chat Icon"
              className={styles.featureIcon}
            />
            <Title level={3}>You are our #1 priority</Title>
            <Text>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </Text>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card className={styles.featureItem} bordered={false}>
            <img
              src={iconMoney}
              alt="Money Icon"
              className={styles.featureIcon}
            />
            <Title level={3}>More savings means higher rates</Title>
            <Text>
              The more you save with us, the higher your interest rate will be!
            </Text>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card className={styles.featureItem} bordered={false}>
            <img
              src={iconSecurity}
              alt="Security Icon"
              className={styles.featureIcon}
            />
            <Title level={3}>Security you can trust</Title>
            <Text>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </Text>
          </Card>
        </Col>
      </Row>
    </Content>
  )
}

export default Features
