import { useState, useEffect } from 'react'
import { Button, Input } from 'antd'
import AccountSection from '@features/profile/components/AccountSection'
import Layout from '@components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@redux/store'
import { setUser } from '@features/auth/redux/authSlice'

const ProfilePage = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.auth.user)
  const [isEditing, setIsEditing] = useState(false)
  const [firstName, setFirstName] = useState(user?.firstName || '')
  const [lastName, setLastName] = useState(user?.lastName || '')

  const handleEditClick = () => {
    setIsEditing(true)
    setFirstName(user?.firstName || '')
    setLastName(user?.lastName || '')
  }

  const handleSaveClick = () => {
    setIsEditing(false)
    if (user) {
      dispatch(setUser({ ...user, firstName, lastName }))
    }
    console.log('Nom mis à jour:', firstName, lastName)
  }

  const handleCancelClick = () => {
    setIsEditing(false)
    setFirstName(user?.firstName || '')
    setLastName(user?.lastName || '')
  }

  return (
    <Layout mainClassName="main bg-dark">
      {user && (
        <>
          <div className="header">
            <h1>
              Welcome back
              <br />
              {user.firstName} {user.lastName}!
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
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '10px',
                  }}
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
        </>
      )}
    </Layout>
  )
}

export default ProfilePage
