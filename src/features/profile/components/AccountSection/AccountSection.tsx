import { Card, Button, Row, Col, Typography } from 'antd'
import styles from './AccountSection.module.scss'

const { Title } = Typography

interface AccountSectionProps {
  title: string
  amount: number
  description: string
}

const AccountSection: React.FC<AccountSectionProps> = ({
  title,
  amount,
  description,
}) => {
  return (
    <Card
      className={styles.account}
      bordered={false}
      title={
        <Title level={3} className={styles.accountTitle}>
          {title}
        </Title>
      }
    >
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={16}>
          <div className={styles.accountContentWrapper}>
            <p className={styles.accountAmount}>${amount.toLocaleString()}</p>
            <p className={styles.accountAmountDescription}>{description}</p>
          </div>
        </Col>
        <Col xs={24} md={8}>
          <div className={styles.cta}>
            <Button block type="primary" htmlType="button">
              View transactions
            </Button>
          </div>
        </Col>
      </Row>
    </Card>
  )
}

export default AccountSection
