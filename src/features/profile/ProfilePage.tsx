import { useState } from 'react'
import { Button, Input, message } from 'antd'
import AccountSection from '@features/profile/components/AccountSection'
import AppLayout from '@common/components/AppLayout'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@redux/store'
import { updateProfile } from '@redux/actions/authActions'

const ProfilePage = () => {
  const dispatch: AppDispatch = useDispatch()
  const user = useSelector((state: RootState) => state.auth.user)
  const [isEditing, setIsEditing] = useState(false)
  const [firstName, setFirstName] = useState(user?.firstName || '')
  const [lastName, setLastName] = useState(user?.lastName || '')
  const [messageApi, contextHolder] = message.useMessage()

  const handleEditClick = () => {
    setIsEditing(true)
    setFirstName(user?.firstName || '')
    setLastName(user?.lastName || '')
  }

  const handleSaveClick = async () => {
    setIsEditing(false)
    if (user) {
      try {
        await dispatch(updateProfile({ firstName, lastName })).unwrap()
        messageApi.success('Profile updated successfully')
      } catch (error) {
        messageApi.error(error as string)
      }
    }
  }

  const handleCancelClick = () => {
    setIsEditing(false)
    setFirstName(user?.firstName || '')
    setLastName(user?.lastName || '')
  }

  return (
    <AppLayout>
      {contextHolder}
      {user && (
        <>
          <div style={{ margin: '2rem 0' }}>
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
                    style={{ width: '10%' }}
                    onClick={handleSaveClick}
                  >
                    Save
                  </Button>
                  <Button
                    type="default"
                    htmlType="button"
                    style={{ width: '10%' }}
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
    </AppLayout>
  )
}

export default ProfilePage
