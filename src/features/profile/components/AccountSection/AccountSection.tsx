import { Card, Button, Row, Col } from 'antd'
import styles from './AccountSection.module.scss'

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
    <Card className={styles.account} bordered={false}>
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={16}>
          <div className={styles.accountContentWrapper}>
            <h3 className={styles.accountTitle}>{title}</h3>
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
