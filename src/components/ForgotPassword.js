import React, {useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  const emailRef = useRef()
  const {resetPassword} = useAuth()
//   const navigate = useNavigate()

  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    try {
        setMessage("")
        setError("")
        setLoading(true)
        await resetPassword(emailRef.current.value)
        setMessage("check your email inbox for further instructions")
    } catch {
        setError("Password reset failed")
    }
    setLoading(false)
  }
  return (
    <>
    <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Password Reset</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <form onSubmit={handleSubmit}>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>

                <Button disabled={loading} className="w-100 mt-3" type="submit">Reset Password</Button>
            </form>
            <div classname="w-100 text-center mt-3">
              <Link to="/login">Login</Link>
            </div>
        </Card.Body>
    </Card>
    <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Signup</Link>
    </div>
    
    </>
  )
}

