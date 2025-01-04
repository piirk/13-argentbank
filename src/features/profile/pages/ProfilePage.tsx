import React, { useState } from 'react'
import NavBar from '../../../common/components/NavBar'
import Footer from '../../../common/components/Footer'
import AccountSection from '../components/AccountSection' // Mise à jour de l'import

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [username, setUsername] = useState('Tony Jarvis')

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = () => {
    setIsEditing(false)
    console.log('Nom mis à jour:', username)
  }

  return (
    <div>
      <NavBar />

      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {username}!
          </h1>
          {isEditing ? (
            <>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="edit-input"
              />
              <button onClick={handleSaveClick} className="edit-button">
                Save Name
              </button>
            </>
          ) : (
            <button onClick={handleEditClick} className="edit-button">
              Edit Name
            </button>
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
      </main>

      <Footer />
    </div>
  )
}

export default ProfilePage
