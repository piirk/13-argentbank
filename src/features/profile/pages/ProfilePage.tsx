import { useState } from 'react'
import { Button, Input } from 'antd'
import AccountSection from '@features/profile/components/AccountSection'
import Layout from '@components/Layout'

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [firstName, setFirstName] = useState('Tony')
  const [lastName, setLastName] = useState('Jarvis')

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = () => {
    setIsEditing(false)
    console.log('Nom mis à jour:', firstName, lastName)
  }

  const handleCancelClick = () => {
    setIsEditing(false)
    // setFirstName('Tony')
    // setLastName('Jarvis')
  }

  return (
    <Layout mainClassName="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {firstName} {lastName}!
        </h1>
        {isEditing ? (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                marginBottom: '1rem',
              }}
            >
              <Input
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={{ width: '25%' }}
              />
              <Input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={{ width: '25%' }}
              />
            </div>
            <div
              style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{ fontWeight: 'bold', width: '10%' }}
                size="large"
                onClick={handleSaveClick}
              >
                Save
              </Button>
              <Button
                type="default"
                htmlType="button"
                style={{ width: '10%' }}
                size="large"
                onClick={handleCancelClick}
              >
                Cancel
              </Button>
            </div>
          </>
        ) : (
          <Button
            type="primary"
            htmlType="submit"
            style={{ fontWeight: 'bold' }}
            size="large"
            onClick={handleEditClick}
          >
            Edit Name
          </Button>
        )}
      </div>

      <h2 className="sr-only">Accounts</h2>
      <AccountSection
        title="Argent Bank Checking (x8349)"
        amount={2082.79}
        description="Available Balance"
      />
      <AccountSection
        title="Argent Bank Savings (x6712)"
        amount={10928.42}
        description="Available Balance"
      />
      <AccountSection
        title="Argent Bank Credit Card (x8349)"
        amount={184.3}
        description="Current Balance"
      />
    </Layout>
  )
}

export default ProfilePage
