import React, { useState } from 'react'
import { Alert, Card } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const [error, setError] = useState("")
  const {currentUser, logout} = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    setError("")

    try{
      await logout()
      navigate("/login")
    } catch{
      setError("failed to log out.")
    }
  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong>{currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Pofile</Link>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          <button variant="link" onClick={handleLogout}>Log Out</button>
        </div>
      </Card>
    
    </>
  )
}
