import { Button } from 'antd'

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
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">${amount.toLocaleString()}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button
          block
          type="primary"
          htmlType="submit"
          style={{ fontWeight: 'bold' }}
          size="large"
        >
          View transactions
        </Button>
      </div>
    </section>
  )
}

export default AccountSection
