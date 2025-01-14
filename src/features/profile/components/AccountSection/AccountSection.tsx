import { Button } from 'antd'
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
    <section className={styles.account}>
      <div className={styles.accountContentWrapper}>
        <h3 className={styles.accountTitle}>{title}</h3>
        <p className={styles.accountAmount}>${amount.toLocaleString()}</p>
        <p className={styles.accountAmountDescription}>{description}</p>
      </div>
      <div className={`${styles.accountContentWrapper} ${styles.cta}`}>
        <Button block type="primary" htmlType="submit">
          View transactions
        </Button>
      </div>
    </section>
  )
}

export default AccountSection
